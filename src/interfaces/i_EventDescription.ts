import { SocialMedia } from ".";

export interface EventDescription {
  date: string;
  text: string;
  location: string;
  owner: string;
  ownerMapUrl?: string;
  ownerWebPage?: string;
  ownerimg?: string;
  largeDesc?: string[];
  socialMedia?: SocialMedia[];
}
