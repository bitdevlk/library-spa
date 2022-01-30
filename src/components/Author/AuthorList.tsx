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
    const [currentAuthor, setCurrentAuthor] = useState(null as Author | null);


    useEffect(() => {
        SaveAuthors(authors);
    });

    const handleOnAddAuthorClick = () => {
        if (currentAuthor) {
            setCurrentAuthor(null);
            setShowCreateAuthor(false);
        } else {
            setShowCreateAuthor(true);
        }
    }
    const handleOnAddAuthorClose = () => {
        setCurrentAuthor(null);
        setShowCreateAuthor(false);
    }

    const onCreateAuthor = (old: Author | null, newAuthor: Author) => {
        if (old) {
            setAuthors(authors.indexOf(old) > -1 ? authors.map(author => author === old ? newAuthor : author) : [...authors, newAuthor]);
        } else {
            setAuthors([...authors, newAuthor]);
        }

        setCurrentAuthor(null);
        setShowCreateAuthor(false);
    }

    const handleOnEditClick = (B: Author) => {
        if (currentAuthor) {
            setCurrentAuthor(null);
            setShowCreateAuthor(false);
        } else {
            setCurrentAuthor(B);
            setShowCreateAuthor(true);
        }
    }

    const handleOnDeleteClick = (B: Author) => {
        if (window.confirm("Are you sure you want to delete this author '" + B.Name + "'?")) {
            setAuthors(authors.filter(b => b !== B));
        }
    }

    return (
        <Row className="mx-0 px-0 my-3 row-cols-1">
            <Col className="">
                {
                    authors.length === 0 ?
                        <EmptyAuthor /> :
                        authors.map((author: Author, index: number) => {
                            return (
                                <AuthorListItem key={index} listKey={index} authorItem={author} onEditClick={handleOnEditClick} onDeleteClick={handleOnDeleteClick} />
                            )
                        })

                }
            </Col>
            <Col>
                <AddAuthor handleOnAddAuthorClick={handleOnAddAuthorClick} />
            </Col>

            {showCreateAuthor &&
                <Col className="mt-4 mr-auto col-11 col-md-12 col-lg-10 col-xl-8">
                    <CreateAuthor handleOnAddAuthorClose={handleOnAddAuthorClose} onCreateAuthor={onCreateAuthor} author={currentAuthor} />
                </Col>
            }

        </Row>
    );
}

export default AuthorList;