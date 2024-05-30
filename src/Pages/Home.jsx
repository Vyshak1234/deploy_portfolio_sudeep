import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import myImg from '../assets/pic.jpg'
import About from './About';
function Home() {
  return (
    <>
      
      <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Software Engineer</h3>

      <div className='container1' style={{ marginTop: '50px' }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius porro quas asperiores voluptates laboriosam repellat rerum, error voluptatem repellendus recusandae. Vero, molestias delectus? Ducimus deleniti ad error pariatur consequuntur.
        </p>

        {/* button */}
        <div className='d-flex justify-content-center'>
          <Link to='/resume' className='btn btn-primary resume-link'>
            Resume
          </Link>
          <Link to='/projects' className='btn btn-success'>Projects</Link>
        </div>

      </div>
      <img className='img-fluid' src={myImg} alt="no img" />
      <About/>
      
    </>
  );
}

export default Home;
