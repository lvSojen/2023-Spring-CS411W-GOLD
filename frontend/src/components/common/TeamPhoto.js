import React from "react"
import Image from "react-bootstrap/Image"

const images = [
  {
    name: "Estefania Barron",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/e.jpg"),
  },
  {
    name: "Joshua Wang",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/jo.jpg"),
  },
  {
    name: "Natalie Mohun",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/n.jpg"),
  },
  {
    name: "Thomas Harlow",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/t.png"),
  },
  {
    name: "Vaelyn Dulce",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/v.jpg"),
  },
  {
    name: "Yao Wang",
    role: "role",
    description: "This is the first image",
    path: require("../../assets/images/y.png"),
  },
]
function TeamPhoto() {
  //   const imagePaths = Object.values(images)
  return (
    <div className="d-flex flex-wrap text-center">
      {images.map((image, index) => (
        <div key={index} className="col-md-4 mb-3">
          <Image src={image.path} width={200} className="rounded m-2" />
          <h5 className="my-2">{image.name}</h5>
          <p>{image.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamPhoto
