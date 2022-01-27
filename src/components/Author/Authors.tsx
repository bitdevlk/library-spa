import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import '../../assets/scss/partials/crud.scss';
import '../../assets/scss/partials/authors.scss';
import AuthorWelcome from "./AuthorWelcome";
import AuthorList from "./AuthorList";


const Authors: FunctionComponent = () => {
    return (
        <Row className="px-0 row-cols-1 data-section">
            <Col className="">
                <AuthorWelcome />
            </Col>
            <Col className="mx-0 px-0">
                <AuthorList />
            </Col>
        </Row>
    );
}

export default Authors;