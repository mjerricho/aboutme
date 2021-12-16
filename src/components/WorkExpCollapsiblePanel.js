import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';


function WorkExpCollapsiblePanel(props) {
    const { workexp, collapse } = props;
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
        <div className="workexp-panel">
            <div onClick={() => toggle()}>
                <Container className="workexp-panel-btn">
                    <Row className="workexp-pic">
                        <Col xs={12} sm={4} md={2} >
                            <img src={workexp.companylogo} alt="others"/>
                        </Col>
                        <Col xs={12} sm={8} md={10}>
                            <Row>
                                <h4>{workexp.role}</h4>
                            </Row>
                            <Row>
                                <h5>{workexp.subtitle}</h5>
                            </Row>
                            <Row>
                                <span>{workexp.duration} at {workexp.company}</span>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Collapse in={isCollapse}> 
                <Container className="workexp-panel-content">
                    <Row className="workexp-panel-row">
                        <Col>
                            <p>{workexp.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><a href={workexp.companywebsite} target="_blank" rel="noopener noreferrer">Link to Company website</a></span>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
        </div>
    )
}

export default WorkExpCollapsiblePanel