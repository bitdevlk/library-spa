import React from 'react';
import './App.scss';
import { Col, Container, Row } from "react-bootstrap";
import Welcome from './components/Welcome/Welcome';

function App() {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome />
                </Col>
                <Col xs={6}>
                    <div>Books</div>
                </Col>
                <Col xs={6}>
                    <div>Authors</div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
