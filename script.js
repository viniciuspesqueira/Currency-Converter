function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}

const API_URL = "https://economia.awesomeapi.com.br/json/last/"

const inputleft = document.getElementById("leftbox");
const inputright = document.getElementById("rightbox");

async function leftToRight() {
try {
  const response = await axios.get (API_URL + "USD-BRL");
  let numbertyped = document.getElementById("leftbox").textContent

  document.getElementById("rightbox").textContent = response.data.USDBRL.bid * numbertyped
  document.getElementById("lastupdate").textContent = "Last update: " + response.data.USDBRL.create_date

} catch (error) {
  document.getElementById("rightbox").textContent = "Error loading"
} 
}

async function rightToLeft() {
  try {
    const response = await axios.get (API_URL + "USD-BRL");
    let numbertyped = document.getElementById("rightbox").textContent

    document.getElementById("leftbox").textContent = numbertyped / response.data.USDBRL.bid
    document.getElementById("lastupdate").textContent = "Last update: " + response.data.USDBRL.create_date

  } catch (error) {
    document.getElementById("leftbox").textContent = "Error loading" 
  } 
  }

inputleft.addEventListener("input", leftToRight)
inputright.addEventListener("input", rightToLeft)

