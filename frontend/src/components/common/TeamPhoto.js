import React from "react"
import Image from "react-bootstrap/Image"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
const images = [
  {
    name: "Estefania Barron",
    role: "Back End Master, Database Specialist",
    description:
      "Estefania Barron is an undergraduate senior majoring in Computer Science at Old Dominion University. She is currently a Technology Delivery intern at NBCUniversal, and has worked as a Data Science intern at NASA and a Web Applications intern at Outfront Media. In her free time she enjoys reading and traveling.",
    path: require("../../assets/images/e.jpg"),
  },
  {
    name: "Joshua Wang",
    role: "Front End Enthusiast",
    description:
      "Joshua Wang is a senior at Old Dominion University majoring in Computer Science. He is a part time Software Engineer for a private company. In his free time, he enjoys working on REACT and REACT mobile with Visual Studio Code. For school assignments, he works with frontend development but is interested in working with backend development as well.",
    path: require("../../assets/images/jo.jpg"),
  },
  {
    name: "Natalie Mohun",
    role: "Back End Master, Database Specialist",
    description:
      "Natalie Mohun is an undergraduate senior at Old Dominion University. She is majoring in computer science, and plans on pursuing a career as a software engineer. In her free time, she enjoys reading, outdoor activities and playing with her dog.",
    path: require("../../assets/images/n.jpg"),
  },
  {
    name: "Thomas Harlow",
    role: "Front End Enjoyer",
    description:
      "Thomas Harlow is a senior undergraduate student at Old Dominion University majoring in Computer Science and minoring in Military Leadership. After college he will commission in the United States Marine Corps and plans to make a career out of it. In his free time he enjoys listening to music, working out, and working on his car.",
    path: require("../../assets/images/t.png"),
  },
  {
    name: "Vaelyn Dulce",
    role: "UI/UX Developer",
    description:
      "Vaelyn Dulce is a senior undergraduate student at Old Dominion University majoring in Computer Science and minoring in Cybersecurity.  After college, she intends to pursue a career in software development. She also works part-time as a martial arts instructor, and in her free time, she enjoys listening to music and playing video games.",
    path: require("../../assets/images/v.jpg"),
  },
  {
    name: "Yao Wang",
    role: "Web Designer",
    description:
      "Yao Wang is an undergraduate senior student at Old Dominion University majoring Computer Science. He works part-time at the ODU EMSE as a developer. After graduation, he hopes to find a job as a full-time software developer. In his free time, he enjoys learning computer technologies, playing video games and watching twitch streamers.",
    path: require("../../assets/images/y.png"),
  },
]
function TeamPhoto() {
  return (
    <div className="d-flex flex-wrap text-center mt-5">
      {images.map((image, index) => (
        <div key={index} className="col-md-4 mb-3 team-photo">
          <OverlayTrigger
            trigger="click"
            key={index}
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-${index}`}>
                <Popover.Header as="h3">{`${image.name}`}</Popover.Header>
                <Popover.Body>{`${image.description}`}</Popover.Body>
              </Popover>
            }
          >
            <Image
              src={image.path}
              width={200}
              className="rounded m-2 team-photo"
              role="button"
            />
          </OverlayTrigger>
          <h5 className="my-2">{image.name}</h5>
          <p>{image.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamPhoto
