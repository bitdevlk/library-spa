import React from "react";
import Welcome from "../components/Welcome/Welcome";
import {Col, Container, Row} from "react-bootstrap";

const Library :React.FC = () => {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={12} className="px-0">
                    <Welcome />
                </Col>
                <Col xs={6}>
                    <div>Books</div>
                </Col>
                <Col xs={6}>
                    <div>Author</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;
