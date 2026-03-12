const URL = import.meta.env.VITE_API_URL;

//const TURL = "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"

console.log(import.meta.env);
console.log(`Api Url: ${URL}`);

export async function signUp(data) {
  return await fetch(`${URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
}


export async function fetchhome() {
  return await fetch(`${URL}/home/`)
}
