import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BooksAPI, GetBooks, SaveBooks } from '../../DataStore'
import { Book } from "../../Book";
import BookListItem from "./BookListItem";
import CreateBook from "./CreateBook";
import AddBook from "./AddBook";
import EmptyBook from "./EmptyBook";

const BookList: FunctionComponent = () => {


    let [books, setBooks] = useState(GetBooks());
    const [showCreateBook, setShowCreateBook] = useState(false);
    const [currentBook, setCurrentBook] = useState(null as Book | null);


    useEffect(() => {
        SaveBooks(books);
    });

    const handleOnAddBookClick = () => {
        if (currentBook) {
            setCurrentBook(null);
            setShowCreateBook(false);
        } else {
            setShowCreateBook(true);
        }
    }
    const handleOnAddBookClose = () => {
        setCurrentBook(null);
        setShowCreateBook(false);
    }

    const onCreateBook = (old: Book | null, newBook: Book) => {
        if (old) {
            setBooks(books.indexOf(old) > -1 ? books.map(book => book === old ? newBook : book) : [...books, newBook]);
        } else {
            setBooks([...books, newBook]);
        }

        setCurrentBook(null);
        setShowCreateBook(false);
    }

    const handleOnEditClick = (B: Book) => {
        if (currentBook) {
            setCurrentBook(null);
            setShowCreateBook(false);
        } else {
            setCurrentBook(B);
            setShowCreateBook(true);
        }
    }

    const handleOnDeleteClick = (B: Book) => {
        if (window.confirm("Are you sure you want to delete this book '" + B.Name + "'?")) {
            setBooks(books.filter(b => b !== B));
        }
    }

    return (
        <Row className="mx-0 px-0 my-3 row-cols-1">
            <Col className="">
                {
                    books.length === 0 ?
                        <EmptyBook /> :
                        books.map((book: Book, index: number) => {
                            return (
                                <BookListItem key={index} listKey={index} bookItem={book} onEditClick={handleOnEditClick} onDeleteClick={handleOnDeleteClick} />
                            )
                        })
                }
            </Col>
            <Col>
                <AddBook handleOnAddBookClick={handleOnAddBookClick} />
            </Col>

            {showCreateBook &&
                <Col className="mt-4 mr-auto col-11 col-md-12 col-lg-10 col-xl-8">
                    <CreateBook handleOnAddBookClose={handleOnAddBookClose} onCreateBook={onCreateBook} book={currentBook} />
                </Col>
            }


        </Row>
    );
}

export default BookList;