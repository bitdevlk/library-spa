import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthorsAPI, GetAuthors, SaveAuthors } from '../../DataStore'
import { Author } from "../../Author";
import AuthorListItem from "./AuthorListItem";
import CreateAuthor from "./CreateAuthor";
import AddAuthor from "./AddAuthor";
import EmptyAuthor from "./EmptyAuthor";

const AuthorList: FunctionComponent = () => {

    let [authors, setAuthors] = useState(GetAuthors());
    const [showCreateAuthor, setShowCreateAuthor] = useState(false);

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

    const handleOnAddAuthorClick = () => {

        setShowCreateAuthor(true);
    }
    const handleOnAddAuthorClose = () => {
        setShowCreateAuthor(false);
    }

    return (
        <Row className="mx-0 px-0 my-3 row-cols-1">
            <Col className="">
                {
                    authors.length == 0 ?
                        <EmptyAuthor /> :
                        authors.map((author: Author, index: number) => {
                            return (
                                <AuthorListItem key={index} listKey={index} authorItem={author} />
                            )
                        })

                }
            </Col>
            <Col>
                <AddAuthor handleOnAddAuthorClick={handleOnAddAuthorClick} />
            </Col>

            {showCreateAuthor &&
                <Col className="mt-4">
                    <CreateAuthor handleOnAddAuthorClose={handleOnAddAuthorClose} />
                </Col>
            }

        </Row>
    );
}

export default AuthorList;