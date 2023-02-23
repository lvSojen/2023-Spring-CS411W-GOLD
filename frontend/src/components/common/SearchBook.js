import React from 'react'
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import NavDropdown from "react-bootstrap/NavDropdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

const language = [
    { label: "English", value: 1 },
    { label: "Spanish", value: 2 },
    { label: "German", value: 3 }
  ];
const condition = [
    { label: "New", value: 1 },
    { label: "Used", value: 2 },
  ];
  const edition = [
    { label: "Eddition 1", value: 1 },
    { label: "Eddition 2", value: 2 },
    { label: "Edition 3", value: 3 }
  ];
  const binding = [
    { label: "Paperback", value: 1 },
    { label: "Hardcover", value: 2 },
  ];
  const format = [
    { label: "Physical", value: 1 },
    { label: "Digital", value: 2 },
  ];

const SearchBook = () => {
    return (
        <Container className="py-3">
            <Form>
                <Form.Group className="mb-3" controlId="bookTitle">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="bookTitle" placeholder="Title" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                    <option disabled selected>language:</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="german">German</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="Author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Author" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ISBN">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="isbn" placeholder="ISBN" />
                </Form.Group>


                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <Form.Label>Condition</Form.Label>
                            <Select options={ condition } />
                        </div>
                        <div className="col-md-4">
                            <Form.Label>Edition</Form.Label>
                            <Select options={ edition } />
                        </div>
                        <div className="col-md-2">
                            <Form.Label>Binding</Form.Label>
                            <Select options={ binding } />
                        </div>
                        <div className="col-md-4">
                            <Form.Label>Format</Form.Label>
                            <Select options={ format } />
                        </div>
                    </div>
                </div>

                <Form.Group className="mb-3" controlId="Price Minimum">
                    <Form.Label><br></br>Price Mimimum</Form.Label>
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
