import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar.jsx'

//Books management
import Books from './pages/Books'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import BookDetails from './pages/BookDetails'

//Users management
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import UserDetails from './pages/UserDetails'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        {/*Book Routes */}
        <Route path='/books' element={<Books />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/edit-book/:id' element={<EditBook />} />

        {/*User Routes */}
        <Route path='/users' element={<Users />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </>
  )
}

export default App
