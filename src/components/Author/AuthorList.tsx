import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthorsAPI, GetAuthors, SaveAuthors } from '../../DataStore'
import { Author } from "../../Author";
import AuthorListItem from "./AuthorListItem";

const AuthorList: FunctionComponent = () => {

    let [authors, setAuthors] = useState(GetAuthors());

    if (authors.length === 0) {
        // Fake authors from copilot
        authors = [
            new Author("J.R.R. Tolkien"),
            new Author("J.K. Rowling"),
            new Author("J.D. Salinger"),
            new Author("John Steinbeck"),
            new Author("F. Scott Fitzgerald"),
        ]
        setAuthors(authors);
    }

    useEffect(() => {
        SaveAuthors(authors);
    });

    return (
        <Row className="mx-0 px-0 my-3">
            <Col className="">
                {
                    authors.map((author: Author, index: number) => {
                        return (
                            <AuthorListItem key={index} listKey={index} authorItem={author} />
                        )
                    })
                }
            </Col>
        </Row>
    );
}

export default AuthorList;