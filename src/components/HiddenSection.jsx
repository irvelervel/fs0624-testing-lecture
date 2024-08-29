import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const HiddenSection = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Button variant={show ? 'warning' : 'success'} onClick={handleClick}>
            {show ? 'NASCONDI' : 'MOSTRA'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          {show && (
            <Card>
              <Card.Img variant="top" src="https://placedog.net/700" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
