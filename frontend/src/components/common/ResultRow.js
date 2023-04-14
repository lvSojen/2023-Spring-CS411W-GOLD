import React, { useState } from "react"
import { Button } from "react-bootstrap"
import HoverText from "./HoverText"
function ResultRow(props) {
  // console.log("props.id :" + )
  const [selectedVariant, setSelectedVariant] = useState(null)
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>
        {props.seller}
        <br />
        {props.seller === "Second and Charles" ? (
          <img
            height={"60px"}
            src={require("../../assets/images/charles_logo.png")}
            alt="Second and Charles Logo"
          />
        ) : (
          <img
            height={"60px"}
            src={require("../../assets/images/prince_logo.jpg")}
            alt="Default Logo"
          />
        )}
      </td>
      <td style={{ textAlign: "left" }}>
        <div>
          <strong>Title:</strong> {props.title}
          <br />
          <strong>Author:</strong> {props.author}
          <br />
          <strong>ISBN:</strong> {props.isbn}
          <br />
          <strong>Binding:</strong> {props.binding}
          <br />
          <strong>Condition:</strong> {props.condition}
          {props.data.availability.length > 1 && (
            <div
              className="variation-buttons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <strong>Variant:</strong>
              {props.data.availability.map((_, variantIndex) => (
                <button
                  key={variantIndex}
                  onClick={() => {
                    props.handleVariantChange(props.isbn, variantIndex)
                    setSelectedVariant(variantIndex)
                  }}
                  style={{
                    borderColor:
                      variantIndex === selectedVariant ? "blue" : "initial",
                  }}
                >
                  {variantIndex + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </td>
      <td>10 miles</td>
      <td>4.99</td>
      <td>
        <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
          <HoverText
            messageElement={
              <>
                Buy this book from <span>{props.seller}</span>
                <hr />
                Base Price: ${props.price}
                <br />
                + Estimated Shipping: $4.99
                <br />= Total Cost: ${(props.price + 4.99).toFixed(2)}
              </>
            }
          >
            <strong> $ {(props.price + 4.99).toFixed(2)} </strong>
          </HoverText>
        </a>
      </td>
      <td>
        <Button variant="outline-primary">
          {/* Replace with a favorite icon */}
          Favorite
        </Button>
      </td>
    </tr>
  )
}

export default ResultRow
