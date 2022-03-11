import React from 'react';
import { useEffect } from 'react';
import colors from '../../constants/colors';
import styled from 'styled-components';
import { Jumbotron } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const StyledTitle = styled.h1`
    color: ${colors.primaryDark};
    opacity: 0.8;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
`;

const TopLine = styled.h3`
    color: ${colors.primaryDark};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

function TextField() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingLeft: '80px', paddingRight: '80px', paddingBottom: '80px' }}>
            <Jumbotron style={{ backgroundColor: colors.secondary }}>
                <Container>
                    <Col xs={12} md={8}>
                        <StyledTitle>About Me</StyledTitle>
                        <p className="lead">
                            I am Rasmus a Software Developer based in Berlin. I work as a Cloud Computing Engineer. My interests range from Machine
                            Learning and Software Engineering topics to Web Developement and Cloud Computing.
                        </p>
                        <br></br>
                    </Col>
                </Container>
                <hr className="my-2" />
                <br></br>
                <TopLine>My Skills</TopLine>
                <Container>
                    <Row xs="auto">
                        <Col>
                            <p className="lead">Python</p>
                        </Col>
                        <Col>
                            <p className="lead">C++</p>
                        </Col>
                        <Col>
                            <p className="lead">JavaScript + React</p>
                        </Col>
                    </Row>
                    <Row xs="auto">
                        <Col>
                            <p className="lead">Machine Learning</p>
                        </Col>
                        <Col>
                            <p className="lead">Reinforcement Learning</p>
                        </Col>
                        <Col>
                            <p className="lead">AWS Services</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default TextField;
