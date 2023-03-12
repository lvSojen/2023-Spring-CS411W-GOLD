import React, { useState } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function SignUpform() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [formErrors, setFormErrors] = useState({})

  const togglePasswordVisibility = (fieldName) => {
    if (fieldName === "password") {
      setShowPassword(!showPassword)
    } else if (fieldName === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  const validateForm = (formData) => {
    const errors = {}
    if (!formData.name) {
      errors.name = "Name is required."
    }
    if (!formData.email) {
      errors.email = "Email is required."
    }
    if (!formData.password) {
      errors.password = "Password is required."
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false)
      errors.confirmPassword = "Passwords do not match."
    } else {
      setPasswordMatch(true)
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target).entries())

    if (validateForm(formData)) {
      const isValidZip = /^\d{5}$/.test(formData.zipcode)
      if (!isValidZip && formData.zipcode) {
        setFormErrors({
          ...formErrors,
          zipcode: "Zip code must be a 5-digit number",
        })
        return
      }

      console.log(formData) // This will log the form data to the console
      // Submit the data to the server using an HTTP request
      event.target.reset() // Reset the form after submitting
      setFormErrors({})
    }
  }

  return (
    <Container className="py-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="text-center">
            Name <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" />
          {formErrors.name && (
            <Form.Text className="text-danger">{formErrors.name}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="text-center">
            Email address <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" />
          {formErrors.email && (
            <Form.Text className="text-danger">{formErrors.email}</Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label className="text-center">
            Password <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
          />
          {formErrors.password && (
            <Form.Text className="text-danger">{formErrors.password}</Form.Text>
          )}
          <Button variant="link" style={{ padding: 5 }}>
            <Form.Check
              type="checkbox"
              label="Show password"
              onClick={() => togglePasswordVisibility("password")}
              style={{ color: "black", fontSize: "14px" }}
            />
          </Button>
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label className="text-center">Confirm Password</Form.Label>
          <Form.Control
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <Button variant="link" style={{ padding: 5 }}>
            <Form.Check
              type="checkbox"
              label="Show password"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              style={{ color: "black", fontSize: "14px" }}
            />
          </Button>
          {!passwordMatch && (
            <Form.Text className="text-danger">
              Passwords do not match.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formZipCode">
          <Form.Label className="text-center">Zip Code (optional)</Form.Label>
          <Form.Control type="text" placeholder="Enter Zip Code" name="zipcode" />
          {formErrors.zipcode && (
            <Form.Text className="text-danger">{formErrors.zipcode}</Form.Text>
          )}
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}

export default SignUpform
