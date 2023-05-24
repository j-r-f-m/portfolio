import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Porfolio() {
  return (
    <>
      <Container>
        {/* about me */}
        <Row xs={1} lg={2}>
          <Col className="mt-5 ">
            <div className="d-flex justify-content-center">
              <Image
                style={{ height: "700px", objectFit: "cover" }}
                src="images/mountain_small.jpg"
                rounded
                fluid
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <div className="mt-4 ">
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
    </>
  );
}
