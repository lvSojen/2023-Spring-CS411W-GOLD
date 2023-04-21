import React, { useState } from "react"
import { Button } from "react-bootstrap"
import HoverText from "./HoverText"
function ResultRow(data) {
  // console.log(data.zipcode)
  // console.log(data)
  const [selectedVariant, setSelectedVariant] = useState(null)
  return (
    <tr>
      <th scope="row">{data.index}</th>
      <td>
        {data.seller}
        <br />
        {data.seller === "Second and Charles" ? (
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
          <strong>Title:</strong> {data.title}
          <br />
          <strong>Author:</strong> {data.author}
          <br />
          <strong>ISBN:</strong> {data.isbn}
          <br />
          <strong>Binding:</strong> {data.binding}
          <br />
          <strong>Condition:</strong> {data.condition}
          {data.data.availability.length > 1 && (
            <div
              className="variation-buttons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <strong>Variant:</strong>
              {data.data.availability.map((_, variantIndex) => (
                <button
                  key={variantIndex}
                  onClick={() => {
                    data.handleVariantChange(data.isbn, variantIndex)
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
      <td>{data.range === undefined
        ? "unknown"
        : `${data.range.toFixed(2)} miles`}</td>

      <td>4.99</td>
      <td>
        <a href={data.linkUrl} target="_blank" rel="noopener noreferrer">
          <HoverText
            messageElement={
              <>
                Buy this book from <span>{data.seller}</span>
                <hr />
                Base Price: ${data.price}
                <br />
                + Estimated Shipping: $4.99
                <br />= Total Cost: ${(data.price + 4.99).toFixed(2)}
              </>
            }
          >
            <strong> $ {(data.price + 4.99).toFixed(2)} </strong>
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
