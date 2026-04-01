import { marked } from "marked";

export default function PostText({ text }) {
  return (
    <>
      
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      />
      <br />
    </>
  );
}
