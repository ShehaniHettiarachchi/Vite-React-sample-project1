import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {

    const { id } = useParams();
    const { getUserById } = useContext(UserContext)

    const [user, setUser] = useState({})

    useEffect(() => {
        const userData = getUserById(id);
        setUser(userData ? userData : {});
    }, [])

    return (
        <div className='container'>
            <h1>{user.name}</h1>
            <h2>{user.email} - {user.phoneNo}</h2>
            <br></br>
            <br></br>

            <h3>Borrowed books</h3>

            <ul>
                {

                    getUserById(id).borrowedBooks.map(book => {
                        return(
                            <li>{book.title}</li>
                        )
                    })

                }

            </ul>

        </div>
    )
}

export default UserDetails