import { EventDescription } from ".";

export interface EventCardProps {
  id: string;
  imgSrc: string;
  title: string;
  description: EventDescription;
  btnLabel: string;
  to: string;
}
