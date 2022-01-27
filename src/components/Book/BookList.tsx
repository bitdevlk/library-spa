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

    if (books.length === 0) {
        // Fake books from copilot
        books = [
            new Book("The Lord of the Rings", "J.R.R. Tolkien", "9780553211135"),
            new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9780746501901"),
            new Book("The Hobbit", "J.R.R. Tolkien", "9780553211135"),
            new Book("The Catcher in the Rye", "J.D. Salinger", "9780679744666"),
            new Book("The Grapes of Wrath", "John Steinbeck", "9780679744666"),
            new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780679744666"),
            new Book("Fantastic Beasts and Where to Find Them", "J.K. Rowling", "9780553211135"),
        ]
        setBooks(books);
    }

    useEffect(() => {
        SaveBooks(books);
    });

    const handleOnAddBookClick = () => {
        setShowCreateBook(true);
    }
    const handleOnAddBookClose = () => {
        setShowCreateBook(false);
    }

    return (
        <Row className="mx-0 px-0 my-3 row-cols-1">
            <Col className="">
                {
                    books.length === 0 ?
                        <EmptyBook /> :
                        books.map((book: Book, index: number) => {
                            return (
                                <BookListItem key={index} listKey={index} bookItem={book} />
                            )
                        })
                }
            </Col>
            <Col>
                <AddBook handleOnAddBookClick={handleOnAddBookClick} />
            </Col>

            {showCreateBook &&
                <Col className="mt-4">
                    <CreateBook handleOnAddBookClose={handleOnAddBookClose} />
                </Col>
            }


        </Row>
    );
}

export default BookList;