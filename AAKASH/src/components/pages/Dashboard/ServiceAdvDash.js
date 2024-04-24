import React from 'react'
import DashNavbar from './../../layout/DashNavbar'
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'
import ScrollImages from './../ScrollImages'
import ServiceAdvMenu from './ServiceAdvMenuCard'
import AdminFunctions from '../../../Axios/AdminAxios'
import ServiceAdvFunctions from '../../../Axios/ServiceAdvisorAxios'

class ServiceAdvDash extends React.Component {

  constructor(props){
    super(props)

    this.state={
      totalcustomer:'',
      totalcards:'',
      totalmechanic:'',
      totalenquiry:''
    }
  }
  componentDidMount(){
    AdminFunctions.getCountCustomers().then((res)=>{
      const count=res.data
       this.setState({
         totalcustomer:count
       })
     
    })

    AdminFunctions.getCountMechanic().then((res)=>{
     this.setState({
       totalmechanic:res.data
       })
     
    })

    AdminFunctions.getCountEnquiry().then((res)=>{
     this.setState({
       totalenquiry:res.data
       })
     
    })

    ServiceAdvFunctions.getAllJobCardsCount().then((res)=>{
     this.setState({
       totalcards:res.data
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
              <ServiceAdvMenu />
            </div>
          </Col>
          <Col>
            <CardGroup>
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalcustomer}</CardTitle>
                  <CardTitle tag="h5">Total Customer</CardTitle>
                </CardBody>
              </Card>

              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="success" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalmechanic}</CardTitle>
                  <CardTitle tag="h5">Total Mechanics</CardTitle>
                </CardBody>
              </Card>

              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="danger" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-address-card fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalcards}</CardTitle>
                  <CardTitle tag="h5">Total Card</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>

              <Card body inverse color="secondary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-spinner fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.totalenquiry}</CardTitle>
                  <CardTitle tag="h5">Total Enquiry</CardTitle>
                </CardBody>
              </Card>
            </CardGroup>
            <br></br>
            <br></br> <br></br>{' '}
            <div>
              <ScrollImages />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
              }
}

export default ServiceAdvDash
