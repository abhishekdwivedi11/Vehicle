import React from 'react'

import { Row, Col } from 'reactstrap'
import DashNavbar from '../../../layout/DashNavbar'
import DashMenuBar from '../AdminDashMenuBar'
import UserFunctions from '../../../../Axios/UserAxios'
import {useHistory} from "react-router-dom"

const AddNewAdmin = () => {

    const history=useHistory()
    const onRegister =(e)=>{

      e.preventDefault()
      const name=e.target.elements.name.value
      const email=e.target.elements.email.value
      const mobile=e.target.elements.mobile.value
      const password=e.target.elements.password.value


      const register = {
        name:name,
        mobileNumber:mobile,
        email:email,
        password:password
      }

      UserFunctions.registerAdmin(register).then((res)=>{
          history.push('/admin-dash')
      }) 

  }
  
  return (
    <div>
      <DashNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <DashMenuBar />
          </Col>
          <Col md={10}>
            
            <br />
            <br />
            <div>
              <article
                className="card-body mx-auto"
                style={{ backgroundColor: 'light gray', maxWidth: 800 }}>
                <h4 className="card-title mt-3 text-center">
                  Create Admin Account
                </h4>
                <br></br>
                <br></br>
                <form style={{ backgroundColor: 'light gray', maxWidth: 800 }} onSubmit={onRegister}>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-user"></i>{' '}
                      </span>
                    </div>
                    <input
                      name="name"
                      className="form-control"
                      placeholder="Full name"
                      type="text"></input>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-envelope"></i>{' '}
                      </span>
                    </div>
                    <input
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      type="email"></input>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-phone"></i>{' '}
                      </span>
                    </div>
                    <select className="custom-select" style={{ maxWidth: 80 }}>
                      <option selected="">+91</option>
                    </select>
                    <input
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile number"
                      type="text"></input>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-lock"></i>{' '}
                      </span>
                    </div>
                    <input
                      name="password"
                      className="form-control"
                      placeholder="Create password"
                      type="password"></input>
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-lock"></i>{' '}
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Confirm password"
                      type="password"></input>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <button type="submit" className="btn btn-danger btn-block">
                      {' '}
                      Create Account{' '}
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddNewAdmin
