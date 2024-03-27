import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventCardProps } from "../../../interfaces";
import "./EventCard.css";

export const EventCard = ({
  imgSrc,
  title,
  description,
  btnLabel,
  to,
}: EventCardProps) => {
  return (
    <Card className="eventCard">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{description.location}</ListGroup.Item>
          <ListGroup.Item>{description.date}</ListGroup.Item>
        </ListGroup>
        <Card.Text>{description.text}</Card.Text>
        <Button variant="primary">
          <Link style={{ textDecoration: "none", color: "#fff" }} to={to}>
            {btnLabel}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
