const URL = process.env.API_URL;

console.log(`Api Url ::::::${URL}`);

export async function signUp(data) {
  return await fetch(`${URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(checkResponse)
    .then((res) => res.json());
}
