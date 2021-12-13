import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutmelong from '../assets/images/about-me/about-me-long.jpg';
import aboutmeshort from '../assets/images/about-me/about-me-short.jpg';
import './AboutMe.css';

function AboutMe() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
                <source media="(max-width: 768px)" srcSet={aboutmelong}/>
                <source media="(min-width: 769px)" srcSet={aboutmeshort}/>
                <img src={aboutmelong} alt="Painting of me" id="about-me-pictures"/>
              </picture>
            </Col>
            <Col xs={12} md={8} id="about-me-text">
              <h2>Hi!</h2>
              <p>
                My name is Jerri.
              </p>
              <p>
                I am a student at Yale-NUS College majoring in Computer Science. I have a wide interest spanning from programming to physics to art. In particular, I really enjoy programming softwares and analysing data. I have been assisting multiple research work where I provide technical help to propel the research forward. Looking forward. I am always excited for new challenges and adventures. 
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutMe
