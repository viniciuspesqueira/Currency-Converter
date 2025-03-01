function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}

const API_URL = "https://economia.awesomeapi.com.br/json/last/"

const inputleft = document.getElementById("leftbox");
const inputright = document.getElementById("rightbox");

async function leftToRight() {
try {
  let response = await axios.get (API_URL + "USD-BRL");
  let numbertyped = document.getElementById("leftbox").textContent
  let convertednumber = response.data.USDBRL.ask * numbertyped
  let date = new Date();

  document.getElementById("rightbox").textContent = convertednumber.toFixed(2);
  document.getElementById("lastupdate").textContent = "Sale price(ask) - Last update: " + date.toUTCString();

} catch (error) {
  document.getElementById("rightbox").textContent = "Error loading";
  } 
}

async function rightToLeft() {
  try {
    let response = await axios.get (API_URL + "USD-BRL");
    let numbertyped = document.getElementById("rightbox").textContent
    let convertednumber = numbertyped / response.data.USDBRL.ask
    let date = new Date();

    document.getElementById("leftbox").textContent = convertednumber.toFixed(2);
    document.getElementById("lastupdate").textContent = "Sale price(ask) - Last update: " + date.toUTCString();

  } catch (error) {
    document.getElementById("leftbox").textContent = "Error loading" 
    } 
  }

inputleft.addEventListener("input", leftToRight)
inputright.addEventListener("input", rightToLeft)

