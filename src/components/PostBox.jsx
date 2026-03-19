
export default function PostBox({ title, text, vote}) {
  return (
    <article >
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{vote}</p>
    </article>
  )
}
