import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import WorkExpCollapsiblePanel from './WorkExpCollapsiblePanel';
import { WorkExpData } from './WorkExpData';
import "./WorkExp.css";
import { motion } from 'framer-motion';


function WorkExp() {
  const [collapse, setCollapse] = useState(true);
  const collapseAll = () => {
    setCollapse(!collapse);
  }

    return (
      <div>
      <section id="section-workexp">
        <Container className="section-container">
          <Row className="section-workexp-header">
            <Col xs={12} md={3}> 
              <h1>Work Experience</h1>
            </Col>
            <Col xs={12} md={9}>
              <motion.div onClick={ () => collapseAll() } id="expand-all-button"
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}>{collapse ? "Expand All" : "Collapse All"}</motion.div>
            </Col>
          </Row>
          {WorkExpData.map((item) => {
            return (
              <Row key={item.id}>
                <WorkExpCollapsiblePanel workexp={item} collapse={collapse}></WorkExpCollapsiblePanel>
              </Row>
            );
          })}
        </Container>
      </section>
      </div>
    );
  }

export default WorkExp
