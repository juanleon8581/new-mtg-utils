import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventCardProps } from "../../../interfaces";
import "./EventCard.css";

export const EventCard = ({
  id,
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
          <ListGroup.Item>
            {new Date(description.date).toLocaleDateString("en-GB")}
          </ListGroup.Item>
        </ListGroup>
        <Card.Text>{description.text}</Card.Text>
        <Link className="linkButton" to={`${to}/${id}`}>
          <Button variant="outline-light">{btnLabel}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
