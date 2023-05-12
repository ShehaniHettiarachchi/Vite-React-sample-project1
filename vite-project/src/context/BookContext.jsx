import { createContext, useState } from "react";
const BookContext = createContext();

export function BookProvider({ children }) {

    const [books, setBooks] = useState([
        {
            id: '1',
            title: 'Madol duwa',
            author: 'Martin',
            pub_date: '2022-12-12',
            copies: '100'
        },
        {
            id: '2',
            title: 'Serlcok holmes',
            author: 'Chandana',
            pub_date: '2022-10-12',
            copies: '50'
        }
    ]);

    const addBook = ({ title, author, pub_date, copies }) => {
        setBooks((prevState) => [...prevState, { id: books.length + 1, title, author, pub_date, copies }])
    }

    const deleteBook = (id) => {
        const newBooks = books.filter(book => book.id != id)
        setBooks(newBooks)
    }

    const getBookById = (id) => {
        const currentBook = books.find(book => book.id == id);
        return currentBook;
    }

    const updateBook = ({ id, title, author, pub_date, copies }) => {
        const toUpdate = getBookById(id);
        toUpdate.title = title;
        toUpdate.author = author;
        toUpdate.pub_date = pub_date;
        toUpdate.copies = copies
    }

    const borrowBook = (id) => {
        let book = getBookById(id);
        console.log(book)
        // book.copies = book.copies - 1;
    }


    return (
        <BookContext.Provider value={{ books, addBook, deleteBook, getBookById, updateBook, borrowBook }}>{children}</BookContext.Provider>
    )

}

export default BookContext;