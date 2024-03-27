import { EventDescription } from ".";

export interface EventCardProps {
  imgSrc: string;
  title: string;
  description: EventDescription;
  btnLabel: string;
  to: string;
}
