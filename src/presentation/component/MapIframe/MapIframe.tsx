import "./MapIframe.css";

interface MapIframeProps {
  src: string;
}

export const MapIframe = ({ src }: MapIframeProps) => {
  return <iframe className="mapIframe" src={src} loading="lazy"></iframe>;
};
