import React from 'react';
import myPdf from '../assets/sudeepnew.pdf';
import './resume.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <>
      <div>
        <h2 className="text-center">Resume</h2>
        <div className="d-flex justify-content-center my-4">
        <label className="experience-label me-3">Experience</label>      
            <button className="bg-slate-300 px-4 py-2 rounded">
            <a style={{ textDecoration: 'none' }} href={myPdf} download="sudeepcv">
              Download Resume
            </a>
          </button>
        </div>
        {/* experience */}
        <div className="box">
          <Container>
            <Row>
              <Col>
                <div className="comp">
                  <p>Nov-23 -- Present</p>
                  <p>ME(A)RN STACK DEVELOPER</p>
                  <p>Luminar Technolab</p>
                </div>
              </Col>
              <Col>
                As a MER(A)N Stack Intern, I worked closely with our experienced developers to build and maintain web applications. And was
                involved in all stages of the development process, from initial design to deployment.
              </Col>
            </Row>
          </Container>
        </div>
        {/* education */}
        <h2 className="section-heading text-blue">Education</h2>
        <div className="box">
          <Container>
            <Row>
              <Col>
                <div className="comp">
                  <p>2019 -- 2023</p>
                  <p>Computer Science And Engineering</p>
                  <p>Musaliar College of Engineering And Technology</p>
                </div>
              </Col>
              <Col>
              During my B.Tech in Computer Science and Engineering, I gained a profound understanding of core technical subjects such as algorithms, data structures, operating systems, and software development. My academic journey was marked by hands-on experience in coding, project management, and collaborative teamwork, which honed my problem-solving skills and adaptability. Additionally, my involvement in various clubs and leadership roles helped me develop strong communication, leadership, and project management skills, preparing me to thrive in dynamic, tech-driven environments.
              </Col>
            </Row>
          </Container>
        </div>
        <h2 className="section-heading text-red">Professional Skills</h2>
        {/* Professional skills */}
        <div className="box mb-30">
          <Container>
            <Row>
              <Col>Full Stack Development</Col>
              <Col>Front-End Developing</Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={{ order: 'last' }}>React</Col>
              <Col xs>Angular</Col>
              <Col xs={{ order: 'first' }}>JavaScript</Col>
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
              <Col xs={{ order: 'last' }}>Python</Col>
              <Col xs>Java</Col>
              <Col xs={{ order: 'first' }}>C</Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Resume;

