import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {

    const backgroundStyle = {
        backgroundImage: `url('https://cdn.wallpapersafari.com/11/2/2ER4Yn.jpg')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", display: "flex",justifyContent: "center", alignItems: "center", color: "white", textAlign: "center"}

  return (
    <div style={backgroundStyle} className="w-100 p-0">
        <div className="mx-5" >
          <Row>
            <Col>
              <h1>Welcome to Book Tracker</h1>
              <p className="lead mt-3">
                Track your reading journey and manage your book collection with ease. 
              </p>
              <div className="mt-4">
                <Link to="/books">
                  <Button variant="primary" size="lg" className="me-2">
                    View Book List
                  </Button>
                </Link>
                <Link to="/add">
                  <Button className="my-3" variant="success" size="lg">
                    Add a New Book
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Home
