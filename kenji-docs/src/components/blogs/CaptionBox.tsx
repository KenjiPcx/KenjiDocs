import type { JSX } from "solid-js/jsx-runtime";

interface CaptionBoxProps {
  children?: JSX.Element;
  caption?: string;
}

export default function CaptionBox(props: CaptionBoxProps) {
  return (
    <figure>
      {props.children}
      <figcaption class="text-center">{props.caption}</figcaption>
    </figure>
  );
}
