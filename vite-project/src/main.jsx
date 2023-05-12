import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BookProvider } from './context/BookContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookProvider>
    <UserProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </UserProvider>
  </BookProvider>,
)