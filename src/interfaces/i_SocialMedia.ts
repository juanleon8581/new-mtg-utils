export interface SocialMedia {
  name:
    | "facebook"
    | "instagram"
    | "twitch"
    | "discord"
    | "whatsapp"
    | "youtube";
  link: string;
  imgSrc?: string;
  alt?: string;
}
