import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

const AuthorWelcome: FunctionComponent = () => {
    return (<Row className="px-0 col-sm-12">
        <Col>
            <p className="h1">Authors</p>
            <hr className="py-0 mt-1" />
        </Col>

    </Row>
    )
}
export default AuthorWelcome;