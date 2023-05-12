import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';

const Users = () => {
    const { users, deleteUser } = useContext(UserContext);

    const deleteUserById = (id) => {
        deleteUser(id)
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>User list</h1>

            <Link to={'/add-user'}><button className='btn btn-success'>Add user</button></Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone no.</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => { 
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNo}</td>
                                    <td> 
                                        <Link to={`/user/${user.id}`}><button className='btn btn-info'>View</button></Link> 
                                        <Link to={`/edit-user/${user.id}`}><button className='btn btn-warning'>Update</button></Link>
                                        <button className='btn btn-danger' onClick={() => deleteUserById(user.id)}>Delete</button> 
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

export default Users