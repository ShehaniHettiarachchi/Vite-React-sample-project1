import React, { useContext } from 'react'
import BookContext from '../context/BookContext'
import { Link } from 'react-router-dom';


const Books = () => {

    const { books, deleteBook } = useContext(BookContext);

    const deleteBookById = (id) => {
        deleteBook(id)
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Book list</h1>
            <Link to={'/add-book'}><button className='btn btn-success'>Add book</button></Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        books.map(book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td> 
                                        <Link to={`/book/${book.id}`}><button className='btn btn-info'>View</button></Link> 
                                        <Link to={`/edit-book/${book.id}`}><button className='btn btn-warning'>Update</button></Link> 
                                        <button className='btn btn-danger' onClick={() => deleteBookById(book.id)}>Delete</button> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Books