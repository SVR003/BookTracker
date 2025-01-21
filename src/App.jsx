import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BookList from "./components/BookList"
import BookForm from "./components/BookForm"
import HomePage from "./components/Home"
import Header from "./components/Header"
import * as bookService from "./services/bookService"
import Footer from "./components/Footer"

function App() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [editingBook, setEditingBook] = useState(null)
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const data = await bookService.getAllBooks()
    setBooks(data)
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const addBook = async (book) => {
    const savedBook = await bookService.saveBook(book)
    setBooks((prevBooks) => [...prevBooks, savedBook])
  }

  const updateBook = async (book) => {
    const updatedBook = await bookService.saveBook(book)
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    )
  }

  const deleteBook = async (id) => {
    await bookService.deleteBook(id)
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
  };

  const handleSort = (key) => {
    setSortBy(key)
    const sortedBooks = [...books].sort((a, b) => {
      if (a[key] < b[key]) return -1
      if (a[key] > b[key]) return 1
      return 0
    })
    setBooks(sortedBooks);
  }

  return (
    <Router>
      <div>
        <ToastContainer />
        <Header setSearchQuery={setSearchQuery} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookList books={filteredBooks} deleteBook={deleteBook} setEditingBook={setEditingBook} setSortBy={handleSort}/>}/>
          <Route path="/add" element={<BookForm setBooks={setBooks} addBook={addBook} />} />
          <Route path="/edit/:id" element={ <BookForm setBooks={setBooks} editingBook={editingBook} updateBook={updateBook}/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
