import React from "react"
import { Button, Card, Col, Row, Dropdown, Container, ProgressBar } from "react-bootstrap"
import { Link } from "react-router-dom"

function BookList({ books, deleteBook, setEditingBook, setSortBy }) {
  const totalBooks = books.length
  const completedBooks = books.filter((book) => book.status === "Read").length
  const progressPercentage = totalBooks ? (completedBooks / totalBooks) * 100 : 0

  return (
    <Container className="p-4">
      <div className="my-3">
        <div className="d-flex justify-content-between mb-3">
          <h3>Book List</h3>
          <Dropdown>
            <Dropdown.Toggle style={{background:"#3E0000"}} id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortBy("title")}>
                Title
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("author")}>
                Author
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("status")}>
                Status
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

       
        <div className="mb-4">
          <Link to="/add">
            <Button style={{background:"#7C0000"}}>Add New Book</Button>
          </Link>
        </div>

        
        <div className="mb-4">
          <h5>Reading Progress</h5>
          {totalBooks > 0 ? (
            <>
              <ProgressBar
                now={progressPercentage}
                label={`${progressPercentage.toFixed(1)}%`}
                variant="success"
                className="mb-2"
              />
              <p>
                {completedBooks} of {totalBooks} books completed.
              </p>
            </>
          ) : (
            <p>No books added yet. Start by adding a book!</p>
          )}
        </div>

        {books.length === 0 ? (
          <div className="text-center">
            <img
              src="https://www.bing.com/th/id/OGC.acaab9d4378e81cee1a16c90307d17fa?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f5d%2f35%2fe3%2f5d35e39988e3a183bdc3a9d2570d20a9.gif&ehk=28bhii%2bx%2bfnF7t5MCD80RA26YlxiMf%2b5i48pnH4Vuy0%3d"
              alt="noimg"
              className="mb-3"
              style={{ height: "300px" }}
            />
            <h4>No books found</h4>
            <p>Add books to start tracking your reading journey.</p>
            <Link to="/add">
              <Button style={{background:"#91221E"}}>Add Your First Book</Button>
            </Link>
          </div>
        ) : (
          <Row>
            {books.map((book) => (
              <Col md={4} key={book.id}>
                <Card className="mb-3 shadow">
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                    <img className="w-25" style={{marginLeft:"140px"}}  src="https://i2.wp.com/cdn.dribbble.com/users/2367833/screenshots/7816190/media/b1aaf5c98510012b56422d1619dc62e8.gif" alt="" />
                    <Card.Text>Status: {book.status}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Link to={`/edit/${book.id}`}>
                        <Button variant="warning" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
}

BookList.defaultProps = {
  setSortBy: () => {}, 
}

export default BookList
