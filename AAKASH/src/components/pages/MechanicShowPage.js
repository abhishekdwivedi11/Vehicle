import React from 'react'
import Navbar from '../layout/Navbar'

const MechanicShowPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container" >
        <div className="py-4" >
          <h2>Pending Request</h2>
          <br></br>
          <p>
            <strong>
              Your request will be approve shortly.Please Contact Admin for Further Details
            </strong>
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default MechanicShowPage
