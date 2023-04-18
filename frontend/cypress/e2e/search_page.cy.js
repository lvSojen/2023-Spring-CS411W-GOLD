import * as React from "react"

describe("Home page Integration testing", () => {
  it("Visits the home page", () => {
    cy.visit("http://localhost:3000/")
  })

  it("Shows an alert when submit button is clicked with empty fields", () => {
    cy.visit("http://localhost:3000/")

    const alertStub = cy.stub()
    cy.on("window:alert", alertStub)

    cy.get("button[type='submit']")
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          "Please fill at least one of the following: Title, ISBN or Author"
        )
      })
  })
  it("Able to find a sepsfic book based on the ISBN", () => {
    cy.visit("http://localhost:3000/")
    cy.get('input[name="ISBN"]').wait(1000).type("9780743273565", {force: true})
    cy.get("button[type='submit']").click()
    cy.contains("p", "ISBN: ").should("be.visible")
    cy.contains("p", "9780743273565").should("be.visible")
    cy.contains("p", "1 results found").should("be.visible")

    cy.contains("div", "Prince Books").should("be.visible")
    cy.contains("div", "The Great Gatsby: The Only Authorized Edition").should(
      "be.visible"
    )
    cy.contains("div", "F. Scott Fitzgerald").should("be.visible")
    cy.contains("div", "9780743273565").should("be.visible")
    cy.contains("div", "Paperback").should("be.visible")
    cy.contains("div", "New").should("be.visible")
    cy.contains("div", "10 miles").should("be.visible")
    cy.contains("div", "4.99").should("be.visible")
    cy.contains("div", "$ 21.99").should("be.visible")
  })
  it("Change varitatin ", () => {
    cy.visit("http://localhost:3000/")
    cy.get("#ISBN").type("9780743273565", {force: true})
    cy.get("button[type='submit']").click()
    // Wait for the results page to load and find the variant selection dropdown
    cy.contains("button", "3").click()
    // Select the second variant option (assuming the dropdown is a react-select dropdown)
    cy.contains("div", "Second and Charles").should("be.visible")
    cy.contains("div", "The Great Gatsby: The Only Authorized Edition").should(
      "be.visible"
    )
    cy.contains("div", "F. Scott Fitzgerald").should("be.visible")
    cy.contains("div", "9780743273565").should("be.visible")
    cy.contains("div", "Paperback").should("be.visible")
    cy.contains("div", "Used").should("be.visible")
    cy.contains("div", "10 miles").should("be.visible")
    cy.contains("div", "4.99").should("be.visible")
    cy.contains("div", "$ 11.94").should("be.visible")
  })
  it("Able to go to seller's website ", () => {
    cy.visit("http://localhost:3000/")
    cy.get("#ISBN").type("9780743273565", {force: true})
    cy.get("button[type='submit']").click()
    // Wait for the results page to load and find the variant selection dropdown
    cy.contains("button", "3").click()
    // Select the second variant option (assuming the dropdown is a react-select dropdown)
    cy.contains("a", "$ 11.94")
      .invoke("attr", "href")
      .then((href) => {
        // Visit the extracted URL
        expect(href).to.equal(
          "https://www.2ndandcharles.com/shop/great-gatsby-122958"
        )
        cy.visit(href)
      })
  })
})