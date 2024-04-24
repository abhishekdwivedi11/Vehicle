import React, { useState } from 'react';
import DashNavbar from '../../../layout/DashNavbar';
import { Button, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

//import DropdownInput from "react-dropdown-input";
import ServiceAdvMenu from './../ServiceAdvMenuCard';
import ServiceAdvFunctions from '../../../../Axios/ServiceAdvisorAxios';

class AddJobCards extends React.Component{

  constructor(props){
    super(props)
    this.state={
      mechanics:[]
    }
    this.onRegister=this.onRegister.bind(this)

  }

  componentDidMount(){
    ServiceAdvFunctions.getAllMechanics().then((res)=>{
      this.setState(()=>{
        return{
        mechanics:res.data
        }
      })
      console.log(this.state.mechanics)
      this.state.mechanics.map((mech)=>{
        //console.log(mech)
      })
      
    })

  }

    onRegister (e) {
    e.preventDefault();
    const customerName = e.target.elements.customerName.value;
    const customerEmail = e.target.elements.customerEmail.value;
    const mobNo = e.target.elements.mobNo.value;
    const date = e.target.elements.date.value;
    const estimateDate = e.target.elements.estimateDate.value;
    const vehicleNo = e.target.elements.vehicleNo.value;
    const model = e.target.elements.model.value;
    const chasisNo = e.target.elements.chasisNo.value;
    const serviceType = e.target.elements.serviceType.value;
    const mechanicAssigned = e.target.elements.mechanicAssigned.value;
    const suggestedWork = e.target.elements.suggestedWork.value;
    const esitmatedBill = e.target.elements.esitmatedBill.value;

    const register = {
      customerName: customerName,
      customerEmail: customerEmail,
      mobNo: mobNo,
      date: date,
      estimateDate: estimateDate,
      vehicleNo: vehicleNo,
      model: model,
      chasisNo: chasisNo,
      serviceType: serviceType,
      mechanicAssigned: mechanicAssigned,
      suggestedWork: suggestedWork,
      esitmatedBill: esitmatedBill,
    }

    ServiceAdvFunctions.addNewJobCard(register).then((res) => {
      console.log(res.data);

      this.props.history.push('/serviceadvisor-dash')
    })
  }

  render(){
     
  return (
    <div>
      <DashNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <ServiceAdvMenu />
          </Col>

          <Col md={10}>
            <h4
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              Add New Job Card
            </h4>
            <br></br>
            <form onSubmit={this.onRegister}>
              <Row>
                <Col>
                  <div className="container" className="center">
                    <div className="row">
                      <div className="col">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td colspan="">Name : </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="customerName"
                            className="form-control"
                            type="text"></input>
                        </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Email :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="customerEmail"
                            className="form-control"
                            type="text"></input>
                        </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Mobile Number :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="mobNo"
                            className="form-control"
                            type="text"></input>
                        </td>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Date : </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="date"
                            className="form-control"
                            type="date"></input>
                        </td>
                      </div>

                      <div className="col">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Delivery Date :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="estimateDate"
                            className="form-control"
                            type="date"></input>
                        </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Vehicle No. :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="vehicleNo"
                            className="form-control"
                            type="text"></input>
                        </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Model :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="model"
                            className="form-control"
                            type="text"></input>
                        </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Chasis No. : </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="chasisNo"
                            className="form-control"
                            type="text"></input>
                        </td>
                      </div>

                      <div className="col">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Service type :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="serviceType"
                            className="form-control"
                            type="text"></input>
                        </td>
                         <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Mechanic Assign :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                        <select  value={this.state.mechanicSelected} name="mechanicAssigned"> 
                            {this.state.mechanics.map((mech)=>{
          
                              return (
                              <option name={mech}> {mech}</option>
                              )
                        })}
                             
                        </select>
                        </td> 
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Suggestion : </td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            style={{ height: '80' }}
                            name="suggestedWork"
                            className="form-control"
                            type="text"></input>
                        </td>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>Estimated Bill :</td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ' &nbsp &nbsp',
                          }}></div>
                        <td>
                          <input
                            name="esitmatedBill"
                            className="form-control"
                            type="text"></input>
                        </td>
                      </div>
                    </div>
                  </div>

                  <br />

                  <br />
                  <tr colspan="8">
                    <td colSpan="8"></td>
                    <td></td>
                    <td>
                      <div>
                        <Button color="danger">Submit</Button>
                      </div>
                    </td>
                  </tr>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
                        }
                        
}
export default AddJobCards;
