import React from 'react'
import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../CustomerDashMenuBar'
import CustomerFunctions from '../../../../Axios/CustomerAxios'

class enquiryStatus extends React.Component {


  constructor(props){
    super(props)

    this.state={
      enquiries:[]
    }
  }

  componentDidMount(){
    const customer=sessionStorage.getItem('user')
    const temp=JSON.parse(customer)
    CustomerFunctions.viewEnquiry(temp.id).then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          enquiries:res.data
        }
      })
    })

    console.log(this.state.enquiries)
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
                    Sr.No.
                  </th>
                  <th scope="col" colSpan="2">
                    Subject
                  </th>
                  <th scope="col" colSpan="3">
                    Description
                  </th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {this.state.enquiries.map((enq)=>{
                  return (
                    <tr>
                  <th scope="row" colSpan="1">
                    {enq.id}
                  </th>
                  <td scope="col" colSpan="2">{enq.subject}</td>
                  <td scope="col" colSpan="3">{enq.description}</td>
                  <td scope="col" colSpan="3">
                    {enq.response !=null ?  enq.response : 'Not Yet Responded By Admin' } 
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

export default enquiryStatus
