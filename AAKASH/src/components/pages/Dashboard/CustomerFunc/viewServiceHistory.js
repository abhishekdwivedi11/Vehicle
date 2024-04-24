import React from 'react'
import { Row, Col, Table } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../CustomerDashMenuBar'
import CustomerFunctions from '../../../../Axios/CustomerAxios'

class viewServiceHistory extends React.Component {

  
  constructor(props){
    super(props)

    this.state={
      records:[]
    }
  }

  componentDidMount(){
    const customer=sessionStorage.getItem('user')
    const temp=JSON.parse(customer)
    CustomerFunctions.viewPreviousRecord(temp.email).then((res)=>{
      console.log(res.data)
      this.setState(()=>{
        return{
          records:res.data
        }
      })
    })

    console.log(this.state.records)
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
            <h4 className="text-center">Service History</h4>
            <br />
            <Table className="py-4">
              <thead>
                <tr>
      
                  <th scope="col" colSpan="2">
                    Vehicle Reg. No.
                  </th>
                  <th>Chasis Number</th>
                  <th scope="col" colSpan="3">
                    Service Type
                  </th>
                  <th scope="col" colSpan="3">
                    Servicing Date
                  </th>
                  <th scope="col" colSpan="3">
                    WorkDone
                  </th>
                  <th scope="col" colSpan="3">
                    Bill Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.records.map((rec)=>{
                  return (
                  <tr>
                  <th scope="row">{rec.vehicleNo}</th>
                  <td scope="col" colSpan="2">{rec.chasisNo}</td>
                  <td scope="col" colSpan="3">{rec.serviceType}</td>
                  <td scope="col" colSpan="3">{rec.date}</td>
                  <td scope="col" colSpan="3">{rec.suggestedWork}</td>
                  <td scope="col" colSpan="3">{rec.billAmount}</td>
                </tr>
                  )
                })}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  )
  }
}

export default viewServiceHistory
