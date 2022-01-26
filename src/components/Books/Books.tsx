import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import '../../assets/scss/partials/crud.scss';
import '../../assets/scss/partials/books.scss';
import BooksWelcome from "./BooksWelcome";
import BookList from "./BookList";


const Books: FunctionComponent = () => {
    return (
        <Row className="mx-3 px-0 row-cols-1">
            <Col className="">
                <BooksWelcome />
            </Col>
            <Col>
                <BookList />
            </Col>
        </Row>
    )
}

export default Books;