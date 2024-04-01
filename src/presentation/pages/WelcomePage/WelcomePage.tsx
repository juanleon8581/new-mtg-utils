import { Col, Container, Row } from "react-bootstrap";
import { EventCard } from "../../component/EventCard/EventCard";
import { eventsStack } from "./WelcomePageEventsData";

import "./WelcomePage.css";

export const WelcomePage = () => {
  const currentDate = new Date(new Date().toLocaleDateString("en-US"));
  return (
    <Container fluid className="welcomePageContainer">
      <Row className="eventRow">
        {eventsStack.map((e) => {
          if (new Date(e.description.date) < currentDate) {
            return;
          }
          return (
            <Col
              className="cardCol"
              key={`${e.title}${e.description.location}`}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
            >
              <EventCard {...e} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
