import React, { ChangeEvent, FunctionComponent, PropsWithChildren, useState } from "react";
import { Button, Col, Form, FormLabel, FormText, Row } from "react-bootstrap";
import { XCircle } from "react-feather";
import { Author } from "../../Author";

type CreateAuthorPropsModel = {
    handleOnAddAuthorClose: () => void;
    onCreateAuthor: (old: Author | null, author: Author) => void;
    author: Author | null;
}

const CreateAuthor: React.FC<CreateAuthorPropsModel> = (props: PropsWithChildren<CreateAuthorPropsModel>) => {

    const { handleOnAddAuthorClose } = props;


    const [authorName, setAuthorName] = useState(props.author?.Name ?? "");

    const handleOnFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAuthorName: string = e.target.value;
        setAuthorName(newAuthorName);
    }

    const handleOnAddAuthorClick = () => {
        if (authorName) {
            const newAuthor: Author = new Author(authorName);
            props.onCreateAuthor(props.author, newAuthor);
            handleOnAddAuthorClose();
        }
    }

    return (
        <>
            <Row className="align-items-center fluid" >
                <Col className="col-10">
                    <div className="fs-2 createSectionTitle text-decoration-underline">Create Author</div>
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    <XCircle className="createSectionCloseIcon " onClick={handleOnAddAuthorClose} />
                </Col>
            </Row>
            <Row>
                <Col className="ms-3 mt-3 ">
                    <Form.Group>
                        <Form.Label className="mt-3" >Name of Author</Form.Label>
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
                                    className="py-1 px-4 mt-4 align-items-end createAuthorButton"
                                    onClick={() => { handleOnAddAuthorClick() }} >
                                    {props.author ? "Save" : "Create"}
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