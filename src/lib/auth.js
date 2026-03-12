const URL = import.meta.env.API_URL;

//const TURL = "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"

console.log(`Api Url: ${URL}`);


export async function fetchhome() {
  return await fetch(`${URL}/home/`)
}
