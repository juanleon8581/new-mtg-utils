import { useParams } from "react-router-dom";
import { Whatsapp, Instagram, Facebook, Discord } from "react-bootstrap-icons";
import { eventsObj } from "../WelcomePage/WelcomePageEventsData";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import type { EventsObj } from "../../../interfaces";

import { BuyMeACoffe } from "../../../generic/BuyMeACoffe/BuyMeACoffe";
import "./EventDetail.css";
import "./EventDetail.mq.css";

const socialMediaGetIcons = (name: string) => {
  switch (name) {
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "whatsapp":
      return <Whatsapp />;
    case "discord":
      return <Discord />;
    default:
      return null;
  }
};

export const EventDetail = () => {
  const { eventId } = useParams();
  const eventData = eventsObj[eventId as keyof EventsObj];
  const largeDesc = eventData.description.largeDesc;
  const socialMediaInfo = eventData.description.socialMedia;
  return (
    <>
      <Container fluid className="normalPageContainer">
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
          <Col className="largeDesc" xs={12} sm={9}>
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
          <Col xs={12} sm={3} className="otherInfoCol">
            <Container className="otherInfoContainer">
              <Row>
                <Col xs={12}>
                  <img
                    className="ownerImg"
                    src={eventData.description.ownerimg || eventData.imgSrc}
                    alt={eventData.description.owner}
                  />
                  <h5>social media</h5>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <ButtonGroup>
                    {socialMediaInfo?.map((x, i) => {
                      return (
                        <Button
                          variant="outline-light"
                          key={`socialMediaItem${i}`}
                        >
                          {socialMediaGetIcons(x.name)}
                        </Button>
                      );
                    })}
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <BuyMeACoffe />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
