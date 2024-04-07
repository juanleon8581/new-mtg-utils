import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventCardProps } from "../../../interfaces";
import "./EventCard.css";
import { useState } from "react";

export const EventCard = ({
  id,
  imgSrc,
  title,
  description,
  btnLabel,
  to,
}: EventCardProps) => {
  const [imgloaded, setImgLoaded] = useState(false);
  return (
    <Card className="eventCard">
      <div className="cardImgContainer">
        <Card.Img
          variant="top"
          src={imgSrc}
          alt={title}
          onLoad={() => {
            setImgLoaded(true);
          }}
        />
        {!imgloaded && <h5>Loading...</h5>}
      </div>
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
