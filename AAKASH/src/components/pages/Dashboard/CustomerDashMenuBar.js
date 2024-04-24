import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/customer-dash">
            <h5 style={{color:'#eb345b'}}>
              {' '}
              <i className="fa fa-dashboard"></i>
              <p>Customer DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/new-enquiry">
            <Button outline color="secondary">
              Add New Enquiry
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/enquiry-status">
            <Button outline color="danger">
              View Enquiry Status
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/add-service-req">
            <Button outline color="primary">
              Add Service Request
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/previous-request">
            <Button outline color="danger">
              View Previous Service Request
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/service-history">
            <Button outline color="success">
              View Service History
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default DashMenuBar
