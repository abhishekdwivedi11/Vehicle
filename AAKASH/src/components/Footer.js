import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Vehicle Maintenance and Repairing</p>
          </div>
          
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-1">Name: Datta Dandale</p>
            <p className="mb-1">Contact us:  +919850556135</p>
            <p className="mb-0">Email: rrgservices@gmail.com</p>
            <p className="mb-0">Address : Shree Raj Rajeshwar Garage,
            Shop No - 1, Akola, 444002 Maharashtra.
</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

