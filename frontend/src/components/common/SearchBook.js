import React, { useState } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Select from "react-select"
const languageOptions = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
  { label: "German", value: "German" },
]
const conditionOptions = [
  { label: "New", value: 1 },
  { label: "Used", value: 2 },
]
const editionOptions = [
  { label: "Edition 1", value: 1 },
  { label: "Edition 2", value: 2 },
  { label: "Edition 3", value: 3 },
]
const bindingOptions = [
  { label: "Paperback", value: 1 },
  { label: "Hardcover", value: 2 },
]
const formatOptions = [
  { label: "Physical", value: 1 },
  { label: "Digital", value: 2 },
]
const SearchBook = React.memo(() => {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/result", { state: formData })
  }
  const handleLanguageChange = (selectedOption) => {
    setFormData({ ...formData, language: selectedOption?.value })
  }
  const handleConditionChange = (selectedOption) => {
    setFormData({ ...formData, condition: selectedOption?.value })
  }
  const handleEditionChange = (selectedOption) => {
    setFormData({ ...formData, edition: selectedOption?.value })
  }
  const handleBindingChange = (selectedOption) => {
    setFormData({ ...formData, binding: selectedOption?.value })
  }
  const handleFormatChange = (selectedOption) => {
    setFormData({ ...formData, format: selectedOption?.value })
  }
  return (
    <Container className="py-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, bookTitle: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Language">
          <Form.Label>Language</Form.Label>
          <Select
            isClearable
            options={languageOptions}
            onChange={handleLanguageChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ISBN">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN"
            onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
          />
        </Form.Group>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Form.Group className="mb-3" controlId="Condition">
                <Form.Label>Condition</Form.Label>
                <Select
                  isClearable
                  options={conditionOptions}
                  onChange={handleConditionChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="mb-3" controlId="Edition">
                <Form.Label>Edition</Form.Label>
                <Select
                  isClearable
                  options={editionOptions}
                  onChange={handleEditionChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-2">
              <Form.Group className="mb-3" controlId="Binding">
                <Form.Label>Binding</Form.Label>
                <Select
                  isClearable
                  options={bindingOptions}
                  onChange={handleBindingChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="mb-3" controlId="Format">
                <Form.Label>Format</Form.Label>
                <Select
                  isClearable
                  options={formatOptions}
                  onChange={handleFormatChange}
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="PriceMinimum">
          <Form.Label>
            <br></br>Price Minimum
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Min"
            onChange={(e) =>
              setFormData({ ...formData, priceMin: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PriceMaximum">
          <Form.Label>Price Maximum</Form.Label>
          <Form.Control
            type="number"
            placeholder="Max"
            onChange={(e) =>
              setFormData({ ...formData, priceMax: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  )
})
export default SearchBook
