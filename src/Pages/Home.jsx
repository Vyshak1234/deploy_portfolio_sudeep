import React from 'react';
import { Link } from 'react-router-dom';
import myImg from '../assets/pic.jpg';
import About from './About';
import './home.css';

function Home() {
  return (
    <>
      <h3 className="text-center mt-5">Software Engineer</h3>

      <div className="container1 mt-5">
        <p className='bold-colorful'>
          Let's work together for the betterment of humanity.
        </p>

        {/* buttons */}
        <div className="d-flex justify-content-center">
          <Link to="/resume" className="btn btn-primary resume-link me-2">
            Resume
          </Link>
          <Link to="/projects" className="btn btn-success">Projects</Link>
        </div>
      </div>

      <img className="img-fluid mt-5" src={myImg} alt="no img" />
      <About />
    </>
  );
}

export default Home;

