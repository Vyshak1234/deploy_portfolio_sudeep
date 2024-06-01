import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/Sudeep606/">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/sudeep-s-078849252/">
            <i className="fa-brands fa-linkedin-in fa-xl"></i>
          </a>
          <a href="https://www.instagram.com/_psychic_bo/?igsh=MTB6dHBxbTJodXlhdQ%3D%3D">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="mailto:ssudeep606@gmail.com">
            <i className="fa-solid fa-envelope fa-xl"></i>
          </a>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

