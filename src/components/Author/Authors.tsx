import { FunctionComponent } from "react";
import AuthorWelcome from "./AuthorWelcome";
import AuthorList from "./AuthorList";
import '../../assets/scss/partials/crud.scss';
import '../../assets/scss/partials/authors.scss';
import { Col, Row } from "react-bootstrap";


const Authors: FunctionComponent = () => {
    return (
        <Row className="mx-3 px-0 row-cols-1">
            <Col className="">
                <AuthorWelcome />
            </Col>
            <Col>
                <AuthorList />
            </Col>
        </Row>
    );
}

export default Authors;