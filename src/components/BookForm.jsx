
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBookById, saveBook } from "../services/bookService"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { toast } from "react-toastify"

function BookForm({ setBooks, editingBook, addBook, updateBook }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    status: "Unread", 
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        try {
          setIsLoading(true)
          const bookToEdit = await getBookById(id)
          setBook(bookToEdit)
          setIsLoading(false)
        } catch (error) {
          toast.error("Failed to load book details")
          setIsLoading(false)
        }
      }
    }

    fetchBook()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const savedBook = await saveBook(book)

      toast.success(`Book ${id ? "updated" : "added"} successfully!`)
      
      
      setBooks((prevBooks) => {
        if (id) {
          return prevBooks.map((b) =>
            b.id === savedBook.id ? savedBook : b
          )
        } else {
          return [...prevBooks, savedBook]
        }
      })

      navigate("/books")
    } catch (error) {
      toast.error("Failed to save book. Please try again.")
    }
  }

  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">{id ? "Edit Book" : "Add Book"}</h2>
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={book.genre}
                  onChange={handleChange}
                  placeholder="Enter book genre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Reading Status</Form.Label>
                <Form.Select
                  name="status"
                  value={book.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Unread">Unread</option>
                  <option value="Reading">Reading</option>
                  <option value="Read">Read</option>
                </Form.Select>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button style={{background:"#91221E"}} type="submit">
                  {id ? "Update Book" : "Add Book"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/books")}
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default BookForm
