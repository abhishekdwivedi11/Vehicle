import React from 'react'

import { Row, Col } from 'reactstrap'

import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from './../AdminDashMenuBar'
import AdminFunctions from '../../../../Axios/AdminAxios'

class ViewCustomerEnq extends React.Component {
  constructor(props){
    super(props)

    this.state={
      enquiry:[],response:''
    }

  }

  componentDidMount(){
    
    AdminFunctions.getAllCustomersEnquiry().then((res)=>{
    //console.log(res.data)
      

    this.setState(()=>{
      return {
        enquiry:res.data
      }
    })
    //console.log(this.state.enquiry)
    })
}

savecustomer(enq){

  enq.response=this.state.response
  console.log(enq)

  AdminFunctions.setEnquiryResponse(
    {
      id:enq.id,
      response:enq.response
     }
  ).then((res)=>{
    console.log(res.data)
   
  })
 
  this.setState(()=>{
    return {
      response:''
  }
  })
  this.props.history.push('/admin-dash')

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
            <h4 className="text-center">View Customer Enquiry</h4>
            <br />
            <br />
            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Cust.Id</th>
                  <th scope="col" colSpan="1">
                    Name
                  </th>
                  <th scope="col" colSpan="2">
                    Subject
                  </th>
                  <th scope="col" colSpan="3">
                    Description
                  </th>
                  <th scope="col" colSpan="2">
                    Response
                  </th>
                  <th scope="col" colSpan="1">
                    Reply
                  </th>
                </tr>
              </thead>
              <tbody>
                  {this.state.enquiry.map((enq)=>{
                    return(
                    <tr style={{ height: 100 }}>
                  <th scope="row">{enq.custId}</th>
                  <td colSpan="1">{enq.customerName}</td>
                  <td colSpan="2">{enq.subject}</td>
                  <td colSpan="3">{enq.description}</td>
                  <td colSpan="2">
                    <input
                      name="response"
                      className="form-control rounded-0"
                      style={{ height: 100 }}
                      type="text"
                      onChange={(e) => {
                       this.setState(()=>{
                         return {
                           response:e.target.value
                         }
                       })
                      }}></input>
                      
                  </td>

                  <td colSpan="1">
                    {' '}
                    <button
                      type="button"
                      rel="tooltip"
                      className="btn btn-danger btn-round btn-just-icon btn-sm"
                      data-original-title=""
                      title=""
                      onClick={() => {
                        this.savecustomer(enq)
                      }}>
                      
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

export default ViewCustomerEnq
