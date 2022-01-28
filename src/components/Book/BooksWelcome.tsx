import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

const BooksWelcome: FunctionComponent = () => {
    return (
        <Row className="px-0 col-sm-12">
            <Col className="px-0">
                <h1 className="h1">Books</h1>
                <hr className="py-0 mb-3 mt-1 opacity-100" />
            </Col>

        </Row>
    )
}
export default BooksWelcome;