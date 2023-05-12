import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate, useParams } from 'react-router-dom'


const EditUser = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const { getUserById, updateUser } = useContext(UserContext);

    const [user, setUser] = useState({
        name: getUserById(id).name,
        email: getUserById(id).email,
        phoneNo: getUserById(id).phoneNo
        
    })

    const updateUserData = (e) => {
        e.preventDefault();
        updateUser({ ...user, id })
        navigate("/users")
    }


    return (
        <div className='container'>
            <h1>Update user</h1>
            <form onSubmit={updateUserData}>
                <div className='mb-3'>
                    <label htmlFor="">User Name</label>
                    <input type="text" name='name' className='form-control' value={user.name} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">E-mail</label>
                    <input type="text" name='email' className='form-control' value={user.email} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Phone no.</label>
                    <input type="text" name='phoneNo' className='form-control' value={user.phoneNo} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
                </div>
                
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Update user">Update User</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser