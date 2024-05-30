import React from 'react'

function Footer() {
  return (
    <>

   <div style={{backgroundColor:"gray"}} className='footer'>
        
          
          <div style={{marginBottom:"30px",color:'black'}} className="d-flex justify-content-center">
            <a href="https://github.com/Sudeep606/"><i style={{marginRight:"30px",marginTop:'20px',color:'black'}} className="fa-brands fa-github fa-xl"></i></a>
            <a href="https://www.linkedin.com/in/sudeep-s-078849252/"><i style={{marginRight:"30px",marginTop:'20px',color:'black'}} className="fa-brands fa-linkedin-in fa-xl"></i></a>      
            <a href="https://www.instagram.com/_psychic_bo/?igsh=MTB6dHBxbTJodXlhdQ%3D%3D"><i style={{marginRight:"30px",marginTop:'20px',color:'black'}} class="fa-brands fa-instagram fa-xl"></i></a>         
            <a href="mailto:ssudeep606@gmail.com"><i style={{marginRight:"30px",marginTop:'20px',color:'black'}} class="fa-solid fa-envelope fa-xl"></i></a>
          </div>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
   </div>
       
    </>
  )
}

export default Footer
