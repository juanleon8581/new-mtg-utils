import { Col, Container, Row } from "react-bootstrap";
import "./WelcomePage.css";
import { EventCard } from "../../component/EventCard/EventCard";
import MOLiga from "../../../assets/img/testMo1.jpeg";

const exampleText = `Some quick example text to build on the card title and make up
the bulk of the card's content.`;

export const WelcomePage = () => {
  return (
    <Container className="welcomePageContainer">
      <Row>
        <Col xs={12} sm={6}>
          <EventCard
            imgSrc={MOLiga}
            title="4º Liga Spelltable"
            btnLabel="Ir al evento"
            to="/timer"
            description={exampleText}
          />
        </Col>
      </Row>
    </Container>
  );
};
