import React, { ChangeEvent, FunctionComponent, PropsWithChildren, useState } from "react";
import { Button, Col, Form, FormLabel, FormText, Row } from "react-bootstrap";
import Select from 'react-select';
import { XCircle } from "react-feather";
import { GetAuthors } from '../../DataStore'
import { Book } from "../../Book";

type CreateBookPropsModel = {
    handleOnAddBookClose: () => void;
    onCreateBook: (old: Book | null, book: Book) => void;
    book: Book | null;
}

type AuthorSelectOption = { label: string, value: string }

const CreateBook: React.FC<CreateBookPropsModel> = (props: PropsWithChildren<CreateBookPropsModel>) => {

    const { handleOnAddBookClose } = props;


    const [BookName, setBookName] = useState(props.book?.Name ?? "");
    const [ISBN, setISBN] = useState(props.book?.ISBN ?? "");
    const [authorOption, setAuthorOption] = useState(props.book?.Author ? { label: props.book.Author, value: props.book.Author } as AuthorSelectOption : null);


    let authorOptions = [] as AuthorSelectOption[];

    const loadAuthors = () => {
        authorOptions = GetAuthors().map(author => {
            return { value: author.Name, label: author.Name } as AuthorSelectOption;
        });
    };

    loadAuthors();

    const handleOnFormValueChange_BookName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBookName: string = e.target.value;
        setBookName(newBookName);
    }

    const handleOnFormValueChange_ISBN = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newISBN: string = e.target.value;
        setISBN(newISBN);
    }

    const handleAuthorSelectChange = (selected?: AuthorSelectOption | null) => {
        if (selected) {
            setAuthorOption(selected);
        } else {
            setAuthorOption(null);
        }
    }

    const handleOnAddBookClick = () => {
        if (BookName && ISBN && authorOption) {
            const newBook: Book = new Book(BookName, authorOption.label, ISBN);
            props.onCreateBook(props.book, newBook);
            handleOnAddBookClose();
        }
    }


    return (
        <>
            <Row className="align-items-center fluid" >
                <Col className="col-10">
                    <div className="fs-2 createSectionTitle text-decoration-underline">Create Book</div>
                </Col>
                <Col className="col-2 d-flex justify-content-end">
                    <XCircle className="createSectionCloseIcon " onClick={handleOnAddBookClose} />
                </Col>
            </Row>
            <Row>
                <Col className="ms-3 mt-3 ">
                    <Form.Group>

                        <Form.Label className="mt-3" >Title of the Book</Form.Label>
                        <Form.Control
                            type="text"
                            value={BookName}
                            onChange={handleOnFormValueChange_BookName}
                        />

                        <Form.Label className="mt-3" >ISBN</Form.Label>
                        <Form.Control
                            type="text"
                            value={ISBN}
                            onChange={handleOnFormValueChange_ISBN}
                        />

                        <Form.Label className="mt-3" >Author</Form.Label>
                        <Select
                            defaultValue={authorOption}
                            options={authorOptions}
                            onChange={(selectedOption) => { handleAuthorSelectChange(selectedOption) }}
                            onMenuOpen={() => { loadAuthors() }}
                            placeholder=""
                            className="basic-multi-select"
                            classNamePrefix="select"
                            isClearable={true}
                        />


                        <Row>
                            <Col className="d-grid justify-content-end">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="py-1 px-4 mt-4 align-items-end createBookButton"
                                    onClick={() => { handleOnAddBookClick() }} >
                                    {props.book ? "Save" : "Create"}
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