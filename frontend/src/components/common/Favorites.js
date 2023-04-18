import React from "react"
import { Button, Card, CardGroup, Container } from "react-bootstrap"

function RecData()
{
  return (
    <Container className="text-center">
    <CardGroup>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv2-2-f.scribdassets.com%2Fimg%2Fword_document%2F165903445%2Foriginal%2F60aebc2f94%2F1566578906%3Fv%3D1&f=1&nofb=1&ipt=b315835eb449516c9d3af8c1ef737fbe3e458ab3f0e17467c2604ca1011d6579&ipo=images"/>
        <Card.Body>
          <Card.Title>Gates of Fire</Card.Title>
          <Card.Subtitle>Written by Steven Pressfield</Card.Subtitle>
        </Card.Body>
        <Button>Remove Favorite</Button>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.npr.org%2Fassets%2Fbakertaylor%2Fcovers%2Ft%2Fthe-hobbit-or-there-and-back-again%2F9780547928227_custom-857f136943cab96fc9f592815e91f1a915ec292a-s6-c30.jpg&f=1&nofb=1&ipt=c5115286ac7f077bb0fd9069f034db0e499cff64fb6d92206a87bc0edae33c6b&ipo=images"/>
        <Card.Body>
          <Card.Title>The Hobbit</Card.Title>
          <Card.Subtitle>Written by J.R.R Tolkien</Card.Subtitle>
        </Card.Body>
        <Button>Remove Favorite</Button>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EvuW7YdSMrWtg_V3cvh98gHaLr%26pid%3DApi&f=1&ipt=b29c42613a0018b428f918b78cd817f4fb9e663f15adf4d09b2b0c9ccae3bddc&ipo=images" />
        <Card.Body>
          <Card.Title>Dune</Card.Title>
          <Card.Subtitle>Written by Frank Herbert</Card.Subtitle>
        </Card.Body>
        <Button>Remove Favorite</Button>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Figcpublishing.files.wordpress.com%2F2021%2F01%2Fthe-two-towers.jpg%3Fw%3D668&f=1&nofb=1&ipt=ca7c23bf349896225431c2ac9564004d16b9580ac9bc45a92fe670558df9b706&ipo=images" />
        <Card.Body>
          <Card.Title>The Two Towers</Card.Title>
          <Card.Subtitle>Written by J.R.R Tolkien</Card.Subtitle>
        </Card.Body>
        <Button>Remove Favorite</Button>
      </Card>
    </CardGroup>
    </Container>
  )
}
export default RecData
