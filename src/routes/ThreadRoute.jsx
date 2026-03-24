import { useParams, useLoaderData } from "react-router-dom";
import { fetchThreadsById } from "../lib/wrodit";

async function clientLoader({ params }) {
  return await fetchThreadsById(params.id);
}

export default function ThreadRoute() {
  const { id } = useParams();
  console.log(id);
  const thread = useLoaderData();
  console.log("thread", thread);
  

  return (
    <>
      <div>Post ID: {id}</div>
      <h1>{thread.name}</h1>
      <p>{thread.description}</p>
    </>
  );
}

ThreadRoute.loader = clientLoader;
