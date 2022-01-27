import React, { ChangeEvent, FunctionComponent, PropsWithChildren, useState } from "react";
import { Button, Col, Form, FormLabel, FormText, Row } from "react-bootstrap";
import { XCircle } from "react-feather";

type CreateAuthorPropsModel = {
    handleOnAddAuthorClose: () => void;
}
const CreateAuthor: React.FC<CreateAuthorPropsModel> = (props: PropsWithChildren<CreateAuthorPropsModel>) => {
    const { handleOnAddAuthorClose } = props;
    const [authorName, setAuthorName] = useState('');
    const handleOnFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAuthorName: string = e.target.value;
        setAuthorName(newAuthorName);
    }
    return (
        <>
            <Row>
                <Col>
                    <div className="fs-4 createSectionTitle text-decoration-underline">Create Author</div>
                </Col>
                <Col className="d-flex  justify-content-end">
                    <XCircle className="createSectionCloseIcon " onClick={handleOnAddAuthorClose} />
                </Col>
            </Row>
            <Row>
                <Col className="ms-3 mt-3 ">
                    <Form.Group>
                        <Form.Label>Name of Author</Form.Label>
                        <Form.Control
                            type="text"
                            value={authorName}
                            onChange={handleOnFormValueChange}
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