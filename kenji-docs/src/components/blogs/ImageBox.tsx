import CaptionBox from "./CaptionBox";

interface ImageBoxProps {
  src: string;
  alt: string;
  caption?: string;
  class?: string;
}

export default function ImageBox(props: ImageBoxProps) {
  return (
    <CaptionBox caption={props.caption}>
      <img class={`mx-auto ${props.class}`} src={props.src} alt={props.alt} />
    </CaptionBox>
  );
}
