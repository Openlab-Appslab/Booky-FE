import { Book } from "src/book";

export class BookHistory{
    lendDate: String;
    returnDate: String;
    shouldReturn: String;
    bookStatus: String;
    book: Book;

    constructor(
        lendDate: String,
        returnDate: String,
        shouldReturn: String,
        bookStatus: String,
        book: Book
        ) {}
}