import { Book } from "./Book";
import { Author } from "./Author";

export let GetAPI = (key: string, defaultVal: any) => {
    let rawval = localStorage.getItem(key);

    let val: any;

    if (rawval) {
        val = JSON.parse(rawval);
    } else {
        localStorage.setItem(key, JSON.stringify(defaultVal));
        val = defaultVal;
    }

    return {
        get: <T>() => val as T,
        set: (newVal: any) => {
            localStorage.setItem(key, JSON.stringify(newVal));
            val = newVal;
        },
        clear: () => {
            localStorage.removeItem(key);
            val = defaultVal;
        }
    };
}


export let BooksAPI = GetAPI("Books", [
    new Book("The Lord of the Rings", "J.R.R. Tolkien", "9780553211135"),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9780746501901"),
    new Book("The Hobbit", "J.R.R. Tolkien", "9780553211135"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "9780679744666"),
    new Book("The Grapes of Wrath", "John Steinbeck", "9780679744666"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780679744666"),
    new Book("Fantastic Beasts and Where to Find Them", "J.K. Rowling", "9780553211135"),
]);
export let GetBooks = (): Book[] => { return BooksAPI.get<Book[]>() };
export let SaveBooks = (books: Book[]) => { BooksAPI.set(books) };


export let AuthorsAPI = GetAPI("Authors", [
    new Author("J.R.R. Tolkien"),
    new Author("J.K. Rowling"),
    new Author("J.D. Salinger"),
    new Author("John Steinbeck"),
    new Author("F. Scott Fitzgerald"),
]);
export let GetAuthors = (): Author[] => { return AuthorsAPI.get<Author[]>() };
export let SaveAuthors = (authors: Author[]) => { AuthorsAPI.set(authors) };
