import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
        VMRS  Web Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/customer">
                New Customer
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/service-advisor">
                New Service Advisor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/mechanic">
                New Mechanic
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">
                <Button outline color="danger">
                  Log-In
                </Button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact-us">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/feedback">
                Give us feedback !
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
