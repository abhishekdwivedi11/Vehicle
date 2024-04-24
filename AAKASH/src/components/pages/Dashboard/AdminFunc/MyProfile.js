import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'

class MyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    const user = sessionStorage.getItem('user')
    const temp = JSON.parse(user)
    this.setState({
      user: temp,
    })

    console.log(this.state.user)
  }

  render() {
    return (
      <div>
        <DashNavbar />
        <div className="py-5" className="text-black blocktext">
          <Row>
            <Col md={8}>
              <div>
                <h3 className="card-title mt-3 text-center">My Profile</h3>
                <br></br>
                <br></br>

                <div className="form-group profile">
                  <h5>Name : {this.state.user.name}</h5>
                </div>
                <div className="form-group profile">
                  <h5>Email : {this.state.user.email}</h5>
                </div>
                <div className="form-group profile">
                  <h5>Mobile.No : {this.state.user.mobileNumber}</h5>
                </div>

                <br></br>
                <div className="form-group">
                  <NavLink className="nav-link profilebutton" exact to="/change-password">
                    <button
                      type="submit"
                      className="btn btn-danger btn-block"
                      style={{ maxWidth: 300 }}>
                      Change Password
                    </button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default MyProfile
