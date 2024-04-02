import { EventDescription, EventsId } from ".";

export interface EventCardData {
  id: EventsId;
  imgSrc: string;
  title: string;
  btnLabel: string;
  to: string;
  description: EventDescription;
  type?: string;
}
