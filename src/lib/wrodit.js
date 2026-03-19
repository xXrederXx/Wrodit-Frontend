const URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

export async function fetchPosts() {
  const res = await fetch(`${URL}/posts/`);
  console.log("res", res);
  

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return await res.json();
}
