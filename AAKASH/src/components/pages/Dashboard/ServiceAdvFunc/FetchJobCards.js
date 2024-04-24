import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import ServiceAdvMenu from '../ServiceAdvMenuCard'

import ServiceAdvFunctions from '../../../../Axios/ServiceAdvisorAxios'

class FetchJobCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceadv: [],
    }
  }

  componentDidMount() {
    ServiceAdvFunctions.getAllRecentJobCards().then((res) => {
      
      this.setState(() => {
        return {
          serviceadv: res.data,
        }
      })
    })
  }

  render() {
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
            <Col md="10">
              <h5
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                Job Card Details
              </h5>
              <br></br>
              <table
                className="table"
                className="table table-bordered border-dark"
                className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th colspan="col" colSpan="1">
                      Customer Name
                    </th>
                    <th colspan="col" colSpan="2">
                      Email
                    </th>
                    <th colspan="col" colSpan="1">
                      Vehicle No.
                    </th>
                    <th colspan="col" colSpan="2">
                      Suggested Work
                    </th>
                    <th colspan="col" colSpan="2">
                      Mechanic Appointed
                    </th>
                    <th colspan="col" colSpan="1">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.serviceadv.map((service) => {
                    console.log(service)
                    return (
                      <tr style={{ height: 100 }}>
                        <td colspan="1"> {service.customerName}</td>
                        <td colSpan="2">{service.customerEmail}</td>
                        <td colSpan="1">{service.vehicleNo}</td>
                        <td colSpan="2">{service.suggestedWork}</td>
                        <td colSpan="2">{service.mechanicAssigned}</td>
                        <td colSpan="1">{service.date}</td>
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

export default FetchJobCards
