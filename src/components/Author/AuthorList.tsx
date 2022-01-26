import {FunctionComponent} from "react";
import AuthorListItem from "./AuthorListItem";
import {Col, Container, Row} from "react-bootstrap";

const AuthorList: FunctionComponent = () => {
    return (
        <Row className="mx-0 px-0 my-3">
            <Col className="">
                <AuthorListItem/>
                <AuthorListItem/>
                <AuthorListItem/>
                <AuthorListItem/>
                <AuthorListItem/>
            </Col>
        </Row>
    );
}

export default AuthorList;