import React from 'react'
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import NavDropdown from "react-bootstrap/NavDropdown"


const SearchBook = () => {
    return (
        <Container className="py-3">
            <Form>
                <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="bookTitle" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="languageWritten">
                    <Form.Label>Language Written In</Form.Label>
                    <Form.Control type="language" placeholder="Language" />
                </Form.Group>

                <NavDropdown title="Language" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">German</NavDropdown.Item>
                </NavDropdown>

                <Form.Group className="mb-3" controlId="Author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Author" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ISBN">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="isbn" placeholder="ISBN" />
                </Form.Group>

                <NavDropdown title="Condition" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Used</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Edition" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Edition 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Edition 2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Binding" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Paperback</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hardcover</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Format" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Physical</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Digital</NavDropdown.Item>
                </NavDropdown>

                <Form.Group className="mb-3" controlId="Price Minimum">
                    <Form.Label>Price Mimimum</Form.Label>
                    <Form.Control type="priceMin" placeholder="Min" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Price Maximum">
                    <Form.Label>Price Maximum</Form.Label>
                    <Form.Control type="priceMax" placeholder="Max" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Container>
    )
}

export default SearchBook