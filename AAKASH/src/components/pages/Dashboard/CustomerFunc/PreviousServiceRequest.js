import React from 'react'
import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../CustomerDashMenuBar'
import CustomerFunctions from '../../../../Axios/CustomerAxios'

class PreviousRequest extends React.Component {


  constructor(props){
    super(props)

    this.state={
      request:[]
    }
  }

  componentDidMount(){
    const customer=sessionStorage.getItem('user')
    const temp=JSON.parse(customer)
    CustomerFunctions.getPreviousServiceRequests(temp.id).then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          request:res.data
        }
      })
    })

    console.log(this.state.request)
  }
  render(){

  return (
    <div>
      <DashNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col md={10}>
            <h4 className="text-center">Enquiry Status</h4>
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col" colSpan="1">
                    Vehicle Number
                  </th>
                  <th scope="col" colSpan="2">
                    Model
                  </th>
                  <th scope="col" colSpan="3">
                    Date Provided for Service
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.request.map((req)=>{
                  return (
                    <tr>
                  <th scope="row" colSpan="1">
                    {req.vehicleNumber}
                  </th>
                  <td scope="col" colSpan="2">{req.model}</td>
                  
                  <td scope="col" colSpan="3">
                    {req.date !=null ?  req.date : 'Not Yet Provided By Admin' } 
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

export default PreviousRequest
