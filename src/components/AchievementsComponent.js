import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AchievementsData } from './AchievementsData';
import "./Achievements.css";

function Achievements() {
    return (
      <div>
      <section id="section-achievements">
        <Container className="section-container">
          <Row>
            <h1>Achievements</h1>
          </Row>
          <Row>
            {AchievementsData.map((item) => {
              return(
                <Col key={item.id} xs={12} md={6}>
                  <Container className="achievements-card">
                    <Row className="achievements-card-content">
                      <Col xs={12} md={3}>
                        <img src={item.picture} alt="achievements" className="achievements-images"/>
                      </Col>
                      <Col xs={12} md={9}>
                        <h4>{item.title}</h4>
                        <h5>{item.by}</h5>
                        <span>{item.year}</span>
                        <p>{item.description}</p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      </div>
    );
  }

export default Achievements
