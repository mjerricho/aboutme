import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import ProjectsCollapsiblePanel from './ProjectsCollapsiblePanel';
import { ProjectsData } from './ProjectsData';
import "./Projects.css";
import { motion } from 'framer-motion';

function Projects() {
  const [collapse, setCollapse] = useState(true);
  const collapseAll = () => {
    setCollapse(!collapse);
  }

  return (
    <div>
      <section id="section-projects">
        <Container className="section-container">
          <Row className="section-projects-header">
            <Col xs={12} md={3}> 
              <h1>Projects</h1>
            </Col>
            <Col xs={12} md={9}>
              <motion.div onClick={ () => collapseAll() } id="expand-all-button"
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}>{collapse ? "Expand All" : "Collapse All"}</motion.div>
            </Col>
          </Row>
          {ProjectsData.map((item) => {
            return (
              <Row key={item.id}>
                <ProjectsCollapsiblePanel project={item} collapse={collapse}></ProjectsCollapsiblePanel>
              </Row>
            );
          })}
        </Container>
      </section>
    </div>
  );
}

export default Projects
