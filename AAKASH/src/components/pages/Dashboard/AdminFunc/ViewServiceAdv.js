import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../AdminDashMenuBar'
import AdminFunctions from '../../../../Axios/AdminAxios'
import reactDom from 'react-dom'

class ViewServiceAdvisor extends React.Component{

  constructor(props){
    super(props)
    this.state={
      serviceAdvisors:[]
    }
  }

  componentDidMount(){
    
    AdminFunctions.getAllServiceAdvisors().then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          serviceAdvisors:res.data
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
              <h4 className="text-center">View Service Advisors</h4>
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
                  {this.state.serviceAdvisors.map((ser)=>{
                    return (
                    <tr>
                    <th scope="row">{ser.id}</th>
                    <td colSpan="1">{ser.name}</td>
                    <td colSpan="2">{ser.email}</td>
                    <td colSpan="1">{ser.mobileNumber}</td>
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

export default ViewServiceAdvisor
