import React, { useContext } from 'react'
import BookContext from '../context/BookContext'
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';


const Home = () => {

    const { books } = useContext(BookContext);
    const { users } = useContext(UserContext)

    return (
        <div className='container'>
            <br></br>
            <h1>Book list</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        books.map(book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <br /> <br />
            <h1>User list</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Home