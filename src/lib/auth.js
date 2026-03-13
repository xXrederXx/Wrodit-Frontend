const URL = import.meta.env.MODE=="staging"?"http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io":"http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

const TURL = "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"

console.log(import.meta.env);
console.log(`Api Url: ${URL}`);

export async function signUp(data) {
  return await fetch(`${TURL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json());
}


export async function fetchhome() {
  return await fetch(`${TURL}/home/`)
}