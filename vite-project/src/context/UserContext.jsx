import { createContext, useState } from "react";
const UserContext = createContext();


export function UserProvider({ children }) {

    const [users, setUsers] = useState([
        {
            id: '1',
            name: 'jhon cena',
            phoneNo: '0293823823',
            email: 'john@gmail.com',
            borrowedBooks: [
                {
                    title: 'madol duwa'
                },
            ]
        },
        {
            id: '2',
            name: 'paul waker',
            phoneNo: '88326237',
            email: 'paul@gmail.com',
            borrowedBooks: [
                {
                    title: 'sherlock homes'
                }
            ]
        }
    ])

    const saveBorrowedBooks = (email, title) => {
        let user = users.find(user => user.email == email);
        if (user) {
            user.borrowedBooks.push({ title })
        }
    }

    //GET USER BY ID
    const getUserById = (id) => {
        return users.find(user => id == id)
    }

    //ADD USER
    const addUser = ({ name, phoneNo, email }) => {
        setUsers((prevState) => [...prevState, { id: users.length + 1, name, phoneNo, email }])
    }

    //DELETE USER
    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id != id)
        setUsers(newUsers)
    }

    //UPDATE USER
    const updateUser = ({ id, name, phoneNo, email }) => {
        const toUpdate = getUserById(id);
        toUpdate.name = name;
        toUpdate.phoneNo = phoneNo;
        toUpdate.email = email;
    }

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser, updateUser , saveBorrowedBooks, getUserById }}>{children}</UserContext.Provider>
    )
}

export default UserContext;