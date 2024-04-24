import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const ServiceAdvMenu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/serviceadvisor-dash">
            <h5 style={{color:'#eb345b'}}>
              <i className="fa fa-dashboard"></i>
              <p>Service DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <NavLink className="nav-link" exact to="/add-job-cards">
            <Button outline color="secondary">
              Add new Job Cards
            </Button>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          {' '}
          <NavLink className="nav-link" exact to="/fetch-job-cards">
            <Button outline color="primary">
              Fetch recent job cards
            </Button>
          </NavLink>
        </ListGroupItem>
        <ListGroupItem
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          {' '}
          <NavLink className="nav-link" exact to="/fetch-service-request">
            <Button outline color="primary">
              Fetch Service Request
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default ServiceAdvMenu
