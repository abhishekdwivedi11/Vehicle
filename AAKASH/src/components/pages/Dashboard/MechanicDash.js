import React from 'react'

import DashNavbar from '../../layout/DashNavbar'
import DashMenuBar from './MechanicDashMenuBar'
import MechanicFunctions from '../../../Axios/MechanicAxios'

import {
  Card,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from 'reactstrap'
import ScrollImages from '../ScrollImages'

class MechanicDash extends React.Component {

  constructor(props){
    super(props)
    this.state={
      countPending:'',
      countCompleted:'',
      countNewWork:''
    }
  }

  componentDidMount(){

    const user=sessionStorage.getItem('user')
    const temp=JSON.parse(user)
    const name=temp['name']
    
    
    
    MechanicFunctions.getCountCompleted(name).then((res)=>{
      this.setState({
        countCompleted:res.data
        })
      
     })
     MechanicFunctions.getCountPending(name).then((res)=>{
      this.setState({
        countPending:res.data
        })
      
     })

     MechanicFunctions.getPendingWorks(name).then((res)=>{
      
      if(res.data!=null){
      this.setState({
        countNewWork:1
      })
    }
    })

    


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
            <CardGroup>
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-tasks fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countNewWork}</CardTitle>
                  <CardTitle tag="h5">New Work Assigned</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="success" className="text-center">
                <CardBody>
                  <p>
                    <i
                      className="fa fa-check-circle fa-2x"
                      aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countCompleted}</CardTitle>
                  <CardTitle tag="h5">No. of Jobs Completed</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="danger" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countPending}</CardTitle>
                  <CardTitle tag="h5">Pending Jobs</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="info" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-inr fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">Salary</CardTitle>
                  <CardSubtitle tag="h5">12,000 ₹</CardSubtitle>
                </CardBody>
              </Card>
            </CardGroup>

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

export default MechanicDash
