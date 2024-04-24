import React from 'react';
import '../../App.css';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="py-4">
          <h2 className="py-4">Vehicle Maintenance And Repairing Services Web Portal</h2>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <img
          src="/images/imgfin.jpg"
          className="img-responsive mx-auto d-block"
          alt=""
          id="home"
        />
      </div>
    </div>
  );
};

export default Home;
