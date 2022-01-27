import React, { ChangeEvent, FunctionComponent, PropsWithChildren, useState } from "react";
import { Button, Col, Form, FormLabel, FormText, Row } from "react-bootstrap";
import { XCircle } from "react-feather";

type CreateBookPropsModel = {
    handleOnAddBookClose: () => void;
}
const CreateBook: React.FC<CreateBookPropsModel> = (props: PropsWithChildren<CreateBookPropsModel>) => {
    const { handleOnAddBookClose } = props;
    const [BookName, setBookName] = useState('');
    const handleOnFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBookName: string = e.target.value;
        setBookName(newBookName);
    }
    return (
        <>
            <Row>
                <Col>
                    <div className="fs-4 createSectionTitle text-decoration-underline">Create Book</div>
                </Col>
                <Col className="d-flex  justify-content-end">
                    <XCircle className="createSectionCloseIcon " onClick={handleOnAddBookClose} />
                </Col>
            </Row>
            <Row>
                <Col className="ms-3 mt-3 ">
                    <Form.Group>
                        <Form.Label>Name of Book</Form.Label>
                        <Form.Control
                            type="text"
                            value={BookName}
                            onChange={handleOnFormValueChange}
                        />
                        <Row>
                            <Col className="d-grid justify-content-end">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="py-1 px-4 mt-4 align-items-end createBookButton">
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

export default CreateBook;