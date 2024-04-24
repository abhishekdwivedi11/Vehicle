import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const DashMenuBar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/mechanic-dash">
            <h5 style={{color:'#eb345b'}}>
              {' '}
              <i className="fa fa-dashboard"></i>
              <p>Mechanic DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/add-parts">
            <Button outline color="secondary">
              View Job Cards
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default DashMenuBar
