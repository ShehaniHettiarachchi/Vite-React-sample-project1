import React, { useContext, useState } from 'react'
import BookContext from '../context/BookContext'
import { useNavigate, useParams } from 'react-router-dom'


const EditBook = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const { getBookById, updateBook } = useContext(BookContext);

    const [book, setBook] = useState({
        title: getBookById(id).title,
        author: getBookById(id).author,
        pub_date: getBookById(id).pub_date,
        copies: getBookById(id).copies
    })

    const updateBookData = (e) => {
        e.preventDefault();
        updateBook({ ...book, id })
        navigate("/books")
    }


    return (
        <div className='container'>
            <h1>Update book</h1>
            <form onSubmit={updateBookData}>
                <div className='mb-3'>
                    <label htmlFor="">Book title</label>
                    <input type="text" name='title' className='form-control' value={book.title} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Author</label>
                    <input type="text" name='author' className='form-control' value={book.author} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Publication date</label>
                    <input type="date" name='pub_date' className='form-control' value={book.pub_date} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Copies</label>
                    <input type="text" name='copies' className='form-control' value={book.copies} onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Add book">Update book</button>
                </div>
            </form>
        </div>
    )
}

export default EditBook