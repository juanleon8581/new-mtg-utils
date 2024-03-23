import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface EventCardProps {
  imgSrc: string;
  title: string;
  description: string;
  btnLabel: string;
  to: string;
}

export const EventCard = ({
  imgSrc,
  title,
  description,
  btnLabel,
  to,
}: EventCardProps) => {
  return (
    <Card style={{ maxWidth: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          <Link style={{ textDecoration: "none", color: "#fff" }} to={to}>
            {btnLabel}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
