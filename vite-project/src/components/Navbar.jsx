import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Library System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/books" class="nav-link active">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" class="nav-link active">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar