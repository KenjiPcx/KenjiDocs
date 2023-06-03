import CaptionBox from "./CaptionBox";

interface ImageBoxProps {
  src: string;
  alt: string;
  url: string;
  caption?: string;
  class?: string;
}

export default function ImageBoxWithAnchor(props: ImageBoxProps) {
  return (
    <CaptionBox caption={props.caption} captionUrl={props.url}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img
          class={`mx-auto w-full ${props.class}`}
          src={props.src}
          alt={props.alt}
        />
      </a>
    </CaptionBox>
  );
}
