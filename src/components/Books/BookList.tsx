import { FunctionComponent } from "react";
import BookListItem from "./BookListItem";
import { Col, Container, Row } from "react-bootstrap";

const BookList: FunctionComponent = () => {
    return (
        <Row className="mx-0 px-0 my-3">
            <Col className="">
                <BookListItem />
                <BookListItem />
                <BookListItem />
                <BookListItem />
                <BookListItem />
            </Col>
        </Row>
    );
}

export default BookList;