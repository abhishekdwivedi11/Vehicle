import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../AdminDashMenuBar'
import AdminFunctions from '../../../../Axios/AdminAxios'

class ViewMechanics extends React.Component{

  constructor(props){
    super(props)
    this.state={
      mechanics:[]
    }
  }

  componentDidMount(){
    
    AdminFunctions.getAllMechanics().then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          mechanics:res.data
        }
      })
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
            <h4 className="text-center">View Mechanics</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">User Id</th>
                  <th scope="col" colSpan="1">
                    Name
                  </th>
                  <th scope="col" colSpan="2">
                    Email
                  </th>
                  <th scope="col" colSpan="1">
                    Mobile.No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.mechanics.map((mech)=>{
                  return (
                  <tr>
                  <th scope="row">{mech.id}</th>
                  <td colSpan="1">{mech.name}</td>
                  <td colSpan="2">{mech.email}</td>
                  <td colSpan="1">{mech.mobileNumber}</td>
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

export default ViewMechanics
