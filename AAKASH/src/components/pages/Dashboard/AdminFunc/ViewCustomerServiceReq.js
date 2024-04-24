import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../AdminDashMenuBar'
import AdminFunctions from '../../../../Axios/AdminAxios'

class ViewCustomerServiceReq extends React.Component {
  constructor(props) {
    super(props)


    this.onResponse = this.onResponse.bind(this)
    this.state =
    {
      service: [], date: ''
    }
  }

  componentDidMount() {
    AdminFunctions.getAllServiceRequest().then((res) => {
      console.log(res.data)

      this.setState(() => {
        return {
          service: res.data
        }
      })



    })
  }

  onResponse(ser) {

    ser.date = this.state.date
    console.log(ser)

    AdminFunctions.setServiceRequestResponse(ser).then((res) => {
      console.log(res.data)

    })

    this.setState(() => {
      return {
        date: ''
      }
    })
    this.props.history.push('/admin-dash')

  }







  render() {

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
                <h4 className="text-center">View Customer Service</h4>
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
                        Vehicle No.
                      </th>
                      <th scope="col" colSpan="2">
                        Model
                      </th>
                      <th scope="col" colSpan="1">
                        Mobile.No.
                      </th>
                      <th scope="col" colSpan="1">
                        Date Alloted
                      </th>
                      <th scope="col" colSpan="1">
                        Reply
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.service.map((ser) => {
                      return (
                        <tr style={{ height: 100 }}>
                          <th scope="row">{ser.custId}</th>
                          <td colSpan="1">{ser.customerName}</td>
                          <td colSpan="2">{ser.vehicleNumber}</td>
                          <td colSpan="2">{ser.model}</td>
                          <td colSpan="1">{ser.mobileNumber}</td>
                          <td colSpan="1">
                            <input
                              className="form-control rounded-0"
                              style={{ height: 100 }}
                              type="date"
                              onChange={(e) => {
                                this.setState(() => {
                                  return {
                                    date: e.target.value
                                  }
                                })
                              }}></input>
                          </td>

                          <td colSpan="1">
                            {' '}
                            <button onClick={() => {
                              this.onResponse(ser)
                            }}
                              type="button"
                              rel="tooltip"
                              className="btn btn-danger btn-round btn-just-icon btn-sm"
                              data-original-title=""
                              title="">
                              <i className="material-icons">send</i>
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

export default ViewCustomerServiceReq
