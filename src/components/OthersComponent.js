import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function OthersComponent() {
    const leadershiPositions = [
        {
            id: 1,
            role: "Captain",
            organisation: "Yale-NUS College Men's Footbal Team",
            date: "Sep 2021 - Present",
            description: "I liaise between the men's football team (of over 50 members) and the school's athletics department. I revitalise team spirit by organising trainings and competitions, increasing training participation rate by roughly 50%."
        },
        {
            id: 2,
            role: "President",
            organisation: "Yale-NUS College Visual Art Society",
            date: "Sep 2021 - Present",
            description: "As the president, I lead an organisation with over 70 members. However, I often initiated and organised art events for the greater school's student population of over 1000 people. We implemented art jams, workshops and art exhibitions with up to 90 participants. We always look for fresh, beginner-friendly, and creative activities to make the events as inclusive and attractive as possible."
        },
        {
            id: 3,
            role: "Vice-Captain of Venn House",
            organisation: "St. Andrew's Hall Student Council",
            date: "2018-2019",
            description: "I was in charge of organising and implementing events for the St. Andrew's Hall residents, who are mostly international students. Some examples include Sports Day, Talent day, and End of Sem dinner. I was also the point of communication between the residents and the hall's administration"
        }
    ];

    const skills =[
        "Software Engineering", 
        "Data Analytics",
        "Web Development",
        "Machine Learning",
        "Research",
        "Python",
        "OCaml",
        "R",
        "Shell Scripting",
        "React",
        "Angular",
        "HTML",
        "JavaScript",
        "CSS"
    ]

    const languages =[
        "English", 
        "Bahasa Indonesia",
        "Bahasa Melayu"
    ]

    return (
        <section id="section-others">
            <Container className="section-container">
                <Row>
                    <h1>Others</h1>
                </Row>
                <Row className='other-content-row'> {/* in app.css */}
                    <Col xs={12} md={9}>
                        <Row>
                            <h3>Leadership Positions</h3>
                        </Row>
                        {leadershiPositions.map((item) => {
                            return(
                                <Row key={item.id}>
                                    <Col>
                                        <Row>
                                            <h4>{item.role}</h4>
                                        </Row>
                                        <Row>
                                            <h5>{item.organisation}</h5>
                                        </Row>
                                            <span>{item.date}</span>
                                            <p>{item.description}</p>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col xs={12} md={{span: 2, offset: 1}}>
                        <Row>
                            <h3>Skills</h3>
                        </Row>
                            {skills.map((item, index) => {
                                return(
                                    <Row key={index}>
                                        <span>{item}</span>
                                    </Row>
                                )
                            })}
                        <Row>
                            <h3>Languages</h3>
                        </Row>
                        {languages.map((item, index) => {
                                return(
                                    <Row key={index}>
                                        <span>{item}</span>
                                    </Row>
                                )
                            })}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OthersComponent
