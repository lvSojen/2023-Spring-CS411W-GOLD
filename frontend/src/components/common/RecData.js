import React from "react"
import { Card, CardGroup, Container } from "react-bootstrap"

function RecData()
{
  return (
    <Container className="text-center">
    <CardGroup>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://prodimage.images-bn.com/pimages/9781635574104_p0_v5_s192x300.jpg"/>
        <Card.Body>
          <Card.Title>House of Flame and Shadow (Crescent City Series #3)</Card.Title>
          <Card.Subtitle>Written by Sarah J. Maas</Card.Subtitle>
          <Card.Text>
          Just announced this week is the third book in the Crescent City series which includes House of Earth and Blood and House of Sky and Breath. This book will be published on January 30, 2024!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://prodimage.images-bn.com/pimages/9781250856760_p0_v3_s192x300.jpg"/>
        <Card.Body>
          <Card.Title>The God of Endings: A Novel</Card.Title>
          <Card.Subtitle>Written by Jacqueline Holland</Card.Subtitle>
          <Card.Text>
          Gorgeous debut novel here. The prose is brilliant, the characters are interesting and fully realized. This is a unique perspective on the vampire mythology, a vampire who cares and tries to do good while moving through the world but entropy and chaos follow her, forcing her to rebuild over and over. For fans of modern gothic stories and complex protagonists.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://prodimage.images-bn.com/pimages/9780778333425_p0_v2_s192x300.jpg" />
        <Card.Body>
          <Card.Title>Daughters of Nantucket: A Novel</Card.Title>
          <Card.Subtitle>Written by Julie Gerstenblatt</Card.Subtitle>
          <Card.Text>
          A historical fiction novel set during the Nantucket fire in 1846, this is a beautifully written novel featuring strong female protagonists. Following three Nantucket women, their stories are very different but similarly tragic with issues spanning from race to romance. As the fire breaks out, each woman must decide what is their priority to save and how to rebuild afterwards.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: "100%", height: "400px"}} variant="top" src="https://prodimage.images-bn.com/pimages/9781250178619_p0_v2_s192x300.jpg" />
        <Card.Body>
          <Card.Title>The Four Winds: A Novel</Card.Title>
          <Card.Subtitle>Written by Kristin Hannah</Card.Subtitle>
          <Card.Text>
          Perfect for fans of Where the Crawdads Sing, Kristin Hannah’s stunningly beautiful and heart-wrenching dustbowl drama traces the conflicts and challenges faced by Elsa and her family, who journey west in search of a better life. Elsa’s critical choices shape the lives of the people around her for generations to come.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </Container>
  )
}
export default RecData
