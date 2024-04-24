import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../AdminDashMenuBar'
import AdminFunctions from '../../../../Axios/AdminAxios'




class PendingMechReq extends React.Component{


    

  constructor(props){

    super(props)

    this.approveMech=this.approveMech.bind(this)
    this.state = {
      mechanic:[]
    }

  }

 

  componentDidMount(){

     AdminFunctions.getPendingMechanic().then((res)=>{
       
       /* res.data.map((p)=>{
          console.log('map of res data',p)
          this.setState((prevState)=>{
            
            let mechanic=prevState.mechanic
            
            mechanic.push(p)
            console.log(mechanic)

            return{ mechanic:mechanic }
           
          })
        })*/
          this.setState(()=>{
            return {
              mechanic:res.data
            }
          })
      })
     
  }
  
  approveMech(mech){
    console.log(mech.id)
    
   
    this.setState((prevState)=>{
      return {
        mechnic: prevState.mechanic.filter((mechanic) => mechanic.id != mech.id),
      }
    })

      AdminFunctions.updateMechanicStatus(mech.id).then((res)=>{
        console.log(res.data)
        this.props.history.push("/admin-dash");
      })

      
  }

  render(){
    
  return (
    <div>
      <DashNavbar />
      
      <div className="py-5">
        <Row>
          <Col md={2}>
            <div>
              <DashMenuBar />
            </div>
          </Col>
          <Col md={10}>
            <h4 className="text-center">Pending Mechanic Request</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col" colSpan="2">
                    Name
                  </th>
                  <th scope="col" colSpan="2">
                    Email
                  </th>
                  <th scope="col" colSpan="2">
                    MobNumber
                  </th>

                  <th scope="col" colSpan="2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.mechanic.map((mech) => {
                return (
                  <tr style={{ height: 100 }}>
                  <th scope="row">{mech.id}</th>
                  <td colSpan="2">{mech.name}</td>
                  <td colSpan="2">{mech.email}</td>
                  <td colSpan="2">{mech.mobileNumber}</td>
                  <td colSpan="2">
                    {' '}
                    <button
                      type="button"
                      rel="tooltip"
                      className="btn btn-danger btn-round btn-just-icon btn-sm"
                      data-original-title=""
                      title=""
                      onClick={() => {
                        this.approveMech(mech)
                      }}>
                      <i className="material-icons">Approve</i>
                    </button>
                  </td>
                </tr>
                )
        })}
            </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  )
  }
}

export default PendingMechReq
