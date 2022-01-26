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


export let BooksAPI = GetAPI("Books", []);
export let GetBooks = (): Book[] => { return BooksAPI.get<Book[]>() };
export let SaveBooks = (books: Book[]) => { BooksAPI.set(books) };

export let AuthorsAPI = GetAPI("Authors", []);
export let GetAuthors = (): Author[] => { return AuthorsAPI.get<Author[]>() };
export let SaveAuthors = (authors: Author[]) => { AuthorsAPI.set(authors) };
