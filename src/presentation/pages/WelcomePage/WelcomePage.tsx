import { Col, Container, Row } from "react-bootstrap";
import { EventCard } from "../../component/EventCard/EventCard";
import { eventsStack } from "./WelcomePageEventsData";

import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <Container fluid className="welcomePageContainer">
      <Row className="eventRow">
        {eventsStack.map((e) => {
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
