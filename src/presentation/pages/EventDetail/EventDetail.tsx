import { useParams } from "react-router-dom";
import { eventsObj } from "../WelcomePage/WelcomePageEventsData";
import type { EventsObj } from "../../../interfaces";
import { Col, Container, Row } from "react-bootstrap";

import "./EventDetail.css";
import { BuyMeACoffe } from "../../../generic/BuyMeACoffe/BuyMeACoffe";

export const EventDetail = () => {
  const { eventId } = useParams();
  const eventData = eventsObj[eventId as keyof EventsObj];
  const largeDesc = eventData.description.largeDesc;
  return (
    <>
      <Container className="normalPageContainer">
        <Row className="upperContainer">
          <Col xs={12} sm={6}>
            <h1>
              <span>
                {eventId
                  ? `${eventData.title} - ${eventData.description.owner}`
                  : null}
              </span>
            </h1>
          </Col>
          <Col xs={12} sm={6} src={eventData.imgSrc} as={"img"} />
        </Row>
        <Row>
          <Col xs={9}>
            {largeDesc ? (
              largeDesc.map((x, i) => {
                return (
                  <p className="descriptionContainer" key={`desc${i}`}>
                    {x}
                  </p>
                );
              })
            ) : (
              <p className="descriptionContainer">
                {eventData.description.text}
              </p>
            )}
          </Col>
          <Col xs={3} className="otherInfoCol">
            <BuyMeACoffe />
          </Col>
        </Row>
      </Container>
    </>
  );
};
