import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNo: ''
    })

    const { addUser } = useContext(UserContext);

    const AddUserData = (e) => {
        e.preventDefault();
        addUser(user)
        navigate('/users')
    }

    return (
        <div className='container'>
            <h1>Add user</h1>
            <form onSubmit={AddUserData}>
                <div className='mb-3'>
                    <label htmlFor="">User Name</label>
                    <input type="text" name='name' className='form-control' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">E-mail</label>
                    <input type="text" name='email' className='form-control' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Phone no.</label>
                    <input type="text" name='phone' className='form-control' onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Add user">Add user</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser