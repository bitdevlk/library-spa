import {FunctionComponent} from "react";
import AuthorListItem from "./AuthorListItem";
import {Col, Container, Row} from "react-bootstrap";
import EmptyAuthor from "./EmptyAuthor";

const AuthorList: FunctionComponent = () => {
    return (
        <Row className="mx-0 px-0 my-3">
            <Col className="">
                <EmptyAuthor />
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