import React, { useState } from 'react';
import './Artworks.css';
import { Container, Row, Col } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import * as BsIcons from 'react-icons/bs';

// import artworks
import { ArtworksData } from "./ArtworksData";

function Artworks() {
    const [isCollapse, setIsCollapse] = useState(false);

    const toggle = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <div className="section-artworks">
            <Container className="artworks-container">
            <Row>
                <div onClick={() => toggle()} className="moreworks-button">
                    <span>Click Here to see more artworks  </span>
                    <BsIcons.BsFillArrowDownCircleFill size={20}/>
                </div>
                
            </Row>
            <Collapse in={isCollapse}>
            <Row>
                {ArtworksData.map((item) => {
                    return (
                        <Col key={item.id} xs={6} md={3}>
                            <img src={item.image} alt={item.title} className="artworks-image"/>
                        </Col>
                    )
                })}
            </Row>
            </Collapse>
            </Container>
        </div>            
    )
}

export default Artworks
