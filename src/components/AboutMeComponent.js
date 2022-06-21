import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutmelong from '../assets/images/about-me/about-me-long.jpg';
import aboutmeshort from '../assets/images/about-me/about-me-short.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <section id="section-about-me">
        <Container className="section-container">
          <Row >
            <h1>About Me</h1>
          </Row>
          <Row id="about-me-container">
            <Col xs={12} md={4}>
              <picture>
                <source media="(max-width: 768px)" srcSet={aboutmelong} />
                <source media="(min-width: 769px)" srcSet={aboutmeshort} />
                <img src={aboutmelong} alt="Painting of me" id="about-me-pictures" />
              </picture>
            </Col>
            <Col xs={12} md={8} id="about-me-text">
              <h2>Hi! I'm Jerri.</h2>
              <p>
                I code, analyse data, and make art.
              </p>
              <p>
                I am a third year Computer Science student at Yale-NUS College. I have a wide interest spanning from programming to physics to art. Specifically, I really enjoy programming softwares and analysing data. Looking forward, I am always excited for new challenges and adventures. 
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutMe
