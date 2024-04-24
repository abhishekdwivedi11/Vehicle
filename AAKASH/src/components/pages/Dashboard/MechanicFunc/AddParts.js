import React, { useState } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from './../MechanicDashMenuBar'
import MechanicFunctions from '../../../../Axios/MechanicAxios'
import { Row, Col } from 'reactstrap'

class AddParts extends React.Component {

  constructor(props){
    super(props)

    this.state={
      cards:[],
      parts:[],
      partsAdded:[],
      billAmount:200
    }
    this.handleChange=this.handleChange.bind(this)
    this.onRegister=this.onRegister.bind(this)
  }

componentDidMount(){

  const user = sessionStorage.getItem('user')
    const mechName = JSON.parse(user)
    
    //console.log(mechName.name)
    
    

    
    MechanicFunctions.getPendingWorks(mechName.name).then((res)=>{
      console.log(res.data)

      this.setState({
        cards:res.data
      })
    })

    MechanicFunctions.getPartsList().then((res)=>{
    //  console.log(res.data)

      this.setState({
         parts:res.data
      })
    })
}
 

handleChange(e){
 
  const part=e.target.value

   // console.log(part)
    this.setState((prevState)=>{
      return{
        partsAdded:[
          ...prevState.partsAdded,
          part
        ]
      }
    })
      this.state.parts.map((p)=>{
        
          if(p.partName==part){
            this.setState((prevState)=>{
               return{
                  billAmount:prevState.billAmount + p.rate
               }
            })
          }
      })

    console.log(this.state.partsAdded)
}

  onRegister(card){
     //console.log(card)
    // console.log(this.state.partsAdded)
    console.log(this.state.billAmount)
    const body={
      products:this.state.partsAdded,
      billAmount:this.state.billAmount
    }
     MechanicFunctions.submitJobCard(card.id,body).then((res)=>{
        console.log(res)
     })

     this.props.history.push('/mechanic-dash')

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
            <h5>Customer Vehicle Details : </h5>
            <br />
            <br />

            <table
              className="table"
              className="table table-bordered border-dark"
              className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Job .Id</th>
                  
                  <th scope="col" colSpan="1">
                    Vehicle No.
                  </th>
                  <th scope="col" colSpan="2">
                    Chasis No.
                  </th>
                  <th scope="col" colSpan="1">
                    Service Type
                  </th>
                  <th scope="col" colSpan="3">
                    All Suggested Work
                  </th>
                  <th scope="col" colSpan="3">
                    Add Parts
                  </th>
                  <th scope="col" colSpan="1">
                    Service Status
                  </th>
                </tr>
              </thead>
              <tbody>
              {this.state.cards.map((card) => {
                return (
                  <tr style={{ height: 100 }}>
                  <th scope="row">{card.id}</th>
                  <td colSpan="1">{card.vehicleNo}</td>
                  <td colSpan="2">{card.chasisNo}</td>
                  <td colSpan="1">{card.serviceType}</td>
                  <td colSpan="2">{card.suggestedWork}</td>
                  <td colspan="3">
                  <select multiple={true} value={this.state.value} name="partsAdded" onChange={this.handleChange}>
                    {this.state.parts.map((part)=>{
                      
                      return(
                        <option value={part.partName}>{part.partName}</option>
                      )
                    })}
              
                   </select>
                  </td>
                      <td/>
                  <td colSpan="3">
                    <button
                      onClick={()=>{
                        this.onRegister(card)
                      }}
                      type="button"
                      rel="tooltip"
                      className="btn btn-danger btn-round btn-just-icon btn-sm"
                      data-original-title=""
                      title="">
                      <i className="material-icons">Service Done</i>
                    </button>
                  </td>
                </tr>
                )
              }
              )
          }
                
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  )
  }
}

export default AddParts
