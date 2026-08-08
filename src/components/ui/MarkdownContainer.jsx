import { marked } from "marked";
import DOMPurify from "dompurify";

export default function MarkdownContainer({ text, className }) {
  const html = DOMPurify.sanitize(marked.parse(text));

  return <div className={className} dangerouslySetInnerHTML={{__html: html}} />;
}
