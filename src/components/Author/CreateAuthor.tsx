import {ChangeEvent, FunctionComponent, useState} from "react";
import {Button, Col, Form, FormLabel, FormText, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

const CreateAuthor: FunctionComponent = () => {

    const [ authorName , setAuthorName ] = useState('');
    const handleOnFormValueChange = (event:ChangeEvent) => {
        event.preventDefault();
        setAuthorName('');
    }
    return (
        <>
            <Row>
                <Col>
                    <div className="fs-4 createSectionTitle text-decoration-underline">Create Author</div>
                </Col>
                <Col className="d-flex  justify-content-end">
                    <XCircle className="createSectionCloseIcon "/>
                </Col>
            </Row>
            <Row>
                <Col className="ms-3 mt-3 ">
                    <Form.Group>
                        <Form.Label>Name of Author</Form.Label>
                        <Form.Control
                            type="text"
                            value={authorName}
                        />
                        <Row>
                            <Col className="d-grid justify-content-end">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="py-1 px-4 mt-4 align-items-end createAuthorButton">
                                    Create
                                </Button>
                            </Col>
                        </Row>

                    </Form.Group>
                </Col>
            </Row>
        </>
    );
}

export default CreateAuthor;