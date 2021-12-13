import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';


function ProjectsCollapsiblePanel(props) {
    const { project, collapse } = props;
    const [isCollapse, setIsCollapse] = useState(collapse);

    const toggle = () => {
        setIsCollapse(!isCollapse);
    };

    const animate = collapse => {
        setIsCollapse(collapse);
    };

    useEffect(() => {
        animate(!collapse);
    }, [collapse]);

    return (
        <div className="projects-panel">
            <div className="projects-panel-btn" onClick={() => toggle()}>
                <h4>{project.title}</h4>
                <span>{project.subtitle}</span>
            </div>
            <Collapse in={isCollapse}> 
                <Container className="projects-panel-content">
                    <Row className="projects-panel-row">
                        <Col xs={12} md={4} >
                            <img src={project.picture} alt="others"/>
                        </Col>
                        <Col xs={12} md={8} >
                            <Row>
                                <Col>
                                    <p>{project.description}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className="projects-link">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">Click on this link to look more into the project</a>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
        </div>
    )
}

export default ProjectsCollapsiblePanel
