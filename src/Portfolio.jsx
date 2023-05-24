import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function Porfolio() {
  return (
    <>
      {/* about me */}
      <Container className="mt-5 ">
        <Row
          id="about-me"
          xs={1}
          lg={2}
          className="d-flex justify-content-center"
        >
          <Col className="d-flex justify-content-center">
            <div>
              <Image
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src="images/mountain_small.jpg"
                rounded
                fluid
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center mt-3">
            <div>
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* projects */}
      <Container className="mt-5 d-flex justify-content-center">
        <Row id="projects" xs={1} lg={3}>
          <Col>
            <div>
              <h2>Projects</h2>
              <Card style={{ width: "25rem", marginTop: "2rem" }}>
                <Card.Img variant="top" src="images/todo.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem", marginTop: "2rem" }}>
                <Card.Img variant="top" src="images/todo.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "25rem", marginTop: "2rem" }}>
                <Card.Img variant="top" src="images/todo.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
