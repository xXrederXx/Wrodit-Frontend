import { marked } from "marked";

export default function PostText({ text }) {
  return (
    <>
      
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        pariatur ipsam sequi ullam accusamus, fugit nisi excepturi assumenda,
        error sint possimus totam minima quas ut alias nesciunt veritatis
        molestias neque!
      </p>
    </>
  );
}
