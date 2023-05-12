import React, { useContext, useState, useEffect } from 'react'
import BookContext from '../context/BookContext'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from '../context/UserContext'

const BookDetails = () => {

    const { id } = useParams()
    const { getBookById, borrowBook } = useContext(BookContext);
    const { users , saveBorrowedBooks } = useContext(UserContext);

    const [email, setEmail] = useState('')

    const navigate = useNavigate();

    const [book, setBook] = useState({})

    useEffect(() => {
        setBook(getBookById(id))
    }, [])

    const borrowAbook = (id) => {
        const isUser = users.find(user => user.email == email)
        // borrowBook(id)
        if(isUser){
            borrowBook(id);
            saveBorrowedBooks(email , book.title)
            alert("You borrowed a book")
            navigate('/');

        }else{
            alert("Email is invalid")
        }
    }

    return (
        <div className='container'>

            <h1>{book.title} - {book.author} </h1>
            <h3>Publication date - {book.pub_date}</h3>
            <h3>Available copies - {book.copies}</h3>

            <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />

            <button onClick={()=>borrowAbook(book.id)} className='btn btn-secondary'>Borrow books</button>

        </div>
    )
}

export default BookDetails