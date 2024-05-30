import React from 'react'
import myPdf from '../assets/sudeepnew.pdf'
 import './resume.css'
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Resume() {
  
  return (
    <>
      <div >
        <h2 style={{textAlign:"center"}}>Resume</h2>
        <div className="d-flex justify-content-space-around"style={{marginLeft:"380px"}}>
          <label >Experience</label>

         <button className='bg-slate-300 px-4 py-2 rounded'>
          <a style={{textDecoration:'none'}} href={myPdf} download='sudeepcv'>Download Resume</a>
         </button>
        </div>
            {/* experience */}
        <div className="box">
        <Container>
      <Row>
        <Col>
        <div className='comp'>
          <p>Nov-23 -- Present</p>
          <p>ME(A)RN STACK DEVELOPER</p>
          <p>Luminar Technolab</p>
        </div>
        </Col>
        <Col>As a MER(A)N Stack Intern, I worked closely with our experienced developers to build and maintain web applications. And was
involved in all stages of the development process, from initial design to deployment.</Col>
      </Row>

    </Container>
        </div>
        {/* education */}
        <h2 style={{marginLeft:'20px',color:'blue',fontSize:'40px',fontWeight:'600'}}>Education</h2>
        <div className="box">
        <Container>
      <Row>
        <Col>
        
        <div className='comp'>
          <p>2019 -- 2023</p>
          <p>Computer Science And Engineering</p>
          <p>Musaliar College of Engineering And Technology</p>
        </div>
        </Col>
        <Col>As a MER(A)N Stack Intern, I worked closely with our experienced developers to build and maintain web applications. And was
involved in all stages of the development process, from initial design to deployment.</Col>
      </Row>

    </Container>


        </div>
        <h2 style={{marginLeft:'60px',color:'red',fontSize:'40px',fontWeight:'600'}}>Professional Skills</h2>

{/* Professionalskills */}
        <div  className='box mb-30'>
          <Container>
          <Row>
        <Col>Full Stack Development</Col>
        <Col>Front-End developeing</Col>
      </Row>
          </Container>
        <Container>
      <Row>
        <Col xs={{ order: 'last' }}>React</Col>
        <Col xs>Angular</Col>
        <Col xs={{ order: 'first' }}>javascript</Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>Node</Col>
        <Col xs>Express</Col>
        <Col xs={{ order: 'first' }}>MongoDB</Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>HTML</Col>
        <Col xs>CSS</Col>
        <Col xs={{ order: 'first' }}>Bootstrap</Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>python</Col>
        <Col xs>Java</Col>
        <Col xs={{ order: 'first' }}>C</Col>
      </Row>
    </Container>
        </div>
      </div>
    </>
  )
}


export default Resume 
