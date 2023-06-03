import type { JSX } from "preact/jsx-runtime";
interface CaptionBoxProps {
  children?: JSX.Element;
  caption?: string;
  captionUrl?: string;
  class?: string;
}

export default function CaptionBox(props: CaptionBoxProps) {
  return (
    <figure class={props.class}>
      {props.children}
      <figcaption class="text-center">
        {props.captionUrl ? (
          <a href={props.captionUrl}>{props.caption}</a>
        ) : (
          props.caption
        )}
      </figcaption>
    </figure>
  );
}
