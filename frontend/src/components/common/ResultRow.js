import React from "react"
import { Button } from "react-bootstrap"

function ResultRow(props) {
  // console.log("props.id :" + props.id)
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td> {props.seller}</td>
      <td style={{ textAlign: "left" }}>
        <strong>Title:</strong> {props.title}
        <br />
        <strong>Author:</strong> {props.author}
        <br />
        <strong>ISBN:</strong> {props.isbn}
        <br />
        <strong>Binding:</strong> {props.binding}
        <br />
        <strong>Condition:</strong> {props.condition}
        <br />
        <strong>Price:</strong> ${props.price}
        <br />
        <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </td>
      <td>10 miles</td>
      <td>4.99</td>
      <td>
        <strong>$ {(props.price + 4.99).toFixed(2)}</strong>{" "}
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