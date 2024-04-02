import { SocialMedia } from ".";

export interface EventDescription {
  date: string;
  text: string;
  location: string;
  owner: string;
  ownerimg?: string;
  largeDesc?: string[];
  socialMedia?: SocialMedia[];
}
