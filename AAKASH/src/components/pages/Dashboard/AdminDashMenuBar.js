import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/admin-dash">
            <h5 style={{color:'#eb345b'}}>
              <i className="fa fa-dashboard"></i>
              <p >Admin DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/pending-mechanic-req">
            <Button outline color="secondary">
              Pending Mechanic requests
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <NavLink className="nav-link" exact to="/view-customer-enq">
            <Button outline color="primary">
              View Customer Enquiries
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/view-customer-service-req">
            <Button outline color="success">
              View Customer Service Request
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/view-service-advisor">
            <Button outline color="warning">
              View Appointed Service Advisor
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/view-mechanics">
            <Button outline color="danger">
              View Appointed Mechanics
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <NavLink className="nav-link" exact to="/add-new-admin">
            <Button outline color="info">
              Add New Admin
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default DashMenuBar
