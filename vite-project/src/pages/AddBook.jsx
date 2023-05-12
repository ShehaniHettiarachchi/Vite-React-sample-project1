import React, { useContext, useState } from 'react'
import BookContext from '../context/BookContext'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: '',
        author: '',
        pub_date: '',
        copies: ''
    })

    const { addBook } = useContext(BookContext);

    const addBookData = (e) => {
        e.preventDefault();
        addBook(book)
        navigate('/books')
    }

    return (
        <div className='container'>
            <h1>Add book</h1>
            <form onSubmit={addBookData}>
                <div className='mb-3'>
                    <label htmlFor="">Book title</label>
                    <input type="text" name='title' className='form-control' onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Author</label>
                    <input type="text" name='author' className='form-control' onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Publication date</label>
                    <input type="date" name='pub_date' className='form-control' onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Copies</label>
                    <input type="text" name='copies' className='form-control' onChange={(e) => setBook({ ...book, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Add book">Add book</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook