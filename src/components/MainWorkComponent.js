import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MainWork.css';

// importing the image
import artworksuob from "../assets/images/artworks/artworks-uob.jpg";


function MainWork() {
    return (
        <div className="artwork-panel">
            <Container className="section-artworks">
                <Row className="section-artworks-work">
                    <Col>
                        <img src={artworksuob} alt="flower"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 id="title">The RollerCoaster of Expression (2019)</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span id="description">This artwork is my submission for the annual UOB Painting of the Year competition. It is about the exploration and appreciation of emotions.</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainWork
