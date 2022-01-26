import { FunctionComponent } from "react";
import BookListItem from "./BookListItem";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BooksAPI, GetBooks, SetBooks } from '../../DataStore'
import { Book } from "../../Book";

const BookList: FunctionComponent = () => {


    let [books, setBooks] = useState(GetBooks());

    if (books.length === 0) {
        // Fake books from copilot
        books = [
            new Book("The Lord of the Rings", "J.R.R. Tolkien", "9780553211135"),
            new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9780746501901"),
            new Book("The Hobbit", "J.R.R. Tolkien", "9780553211135"),
            new Book("The Catcher in the Rye", "J.D. Salinger", "9780679744666"),
            new Book("The Grapes of Wrath", "John Steinbeck", "9780679744666"),
            new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780679744666"),
        ]
    }

    useEffect(() => {
        SetBooks(books);
    });

    return (
        <Row className="mx-0 px-0 my-3">
            <Col className="">
                {
                    books.map((book: Book, index: number) => {
                        return (
                            <BookListItem key={index} listKey={index} bookItem={book} />
                        )
                    })
                }
            </Col>
        </Row>
    );
}

export default BookList;