function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle('light');
}

const API_URL = 'https://economia.awesomeapi.com.br/json/last/';

async function leftToRight() {
  try {
    let responsexml = await fetch("currencies.xml");
    let str = await responsexml.text();  
    let parser = new DOMParser();
    let currencies = parser.parseFromString(str, "application/xml");
    let currencycodes = currencies.getElementsByTagName("*");
    let currencycode

    for (let i = 1; i < currencycodes.length; i++) {

      if ((document.getElementById('leftcoin').textContent) + "/" + document.getElementById('rightcoin').textContent === currencycodes[i].textContent) {
        currencycode = currencycodes[i].tagName;
        break
      } else {
        console.log(document.getElementById('lastupdate').textContent = 
          'Conversion between this currency pair is not available. Please change the pair and try a new conversion');
      }
    } 

    let leftcurrencycode = currencycode.slice(0, 3);
    let rightcurrencycode = currencycode.slice(4);
    let response = await axios.get(
      API_URL + currencycode
    );
    let numbertyped = document.getElementById('leftvalue').value;
    let convertednumber =
      response.data[leftcurrencycode + rightcurrencycode].ask * numbertyped;
    let date = new Date();

    document.getElementById('rightcurrencycode').textContent =
      rightcurrencycode;
    document.getElementById('leftcurrencycode').textContent = leftcurrencycode;
    document.getElementById('rightvalue').value = convertednumber.toFixed(2);
    document.getElementById('lastupdate').textContent =
      'Sale price(ask) - Last update: ' + date.toUTCString();
  } catch (error) {
    document.getElementById('rightvalue').value = 'Error loading';
    document.getElementById('lastupdate').textContent =
      'Conversion between this currency pair is not available. Please change the pair and try a new conversion';
  }
}

async function rightToLeft() {
  try {
    let responsexml = await fetch("currencies.xml");
    let str = await responsexml.text();  
    let parser = new DOMParser();
    let currencies = parser.parseFromString(str, "application/xml");
    let currencycodes = currencies.getElementsByTagName("*");
    let currencycode

    for (let i = 1; i < currencycodes.length; i++) {

      if ((document.getElementById('leftcoin').textContent) + "/" + document.getElementById('rightcoin').textContent === currencycodes[i].textContent) {
        currencycode = currencycodes[i].tagName;
        break
      } 
    }

    let leftcurrencycode = currencycode.slice(0, 3);
    let rightcurrencycode = currencycode.slice(4);
    let response = await axios.get(
      API_URL + currencycode
    );
    let numbertyped = document.getElementById('rightvalue').value;
    let convertednumber =
      numbertyped / response.data[leftcurrencycode + rightcurrencycode].ask;
    let date = new Date();

    document.getElementById('rightcurrencycode').textContent =
      rightcurrencycode;
    document.getElementById('leftcurrencycode').textContent = leftcurrencycode;
    document.getElementById('leftvalue').value = convertednumber.toFixed(2);
    document.getElementById('lastupdate').textContent =
      'Sale price(ask) - Last update: ' + date.toUTCString();
  } catch (error) {
    document.getElementById('leftvalue').value = 'Error loading';
    document.getElementById('lastupdate').textContent =
      'Conversion between this currency pair is not available. Please change the pair and try a new conversion';
  }
}

leftToRight();

let intervalLeftToRight = setInterval(leftToRight, 10000);

document.getElementById('leftvalue').addEventListener('input', () => {
  clearInterval(intervalLeftToRight);
  leftToRight();
  intervalLeftToRight = setInterval(leftToRight, 10000);
});

document.getElementById('rightvalue').addEventListener('input', () => {
  clearInterval(intervalLeftToRight);
  rightToLeft();
  intervalLeftToRight = setInterval(leftToRight, 10000);
});

document.getElementById('leftcoin').addEventListener('input', () => {
  clearInterval(intervalLeftToRight);
  leftToRight();
  intervalLeftToRight = setInterval(leftToRight, 10000);
});

document.getElementById('rightcoin').addEventListener('input', () => {
  clearInterval(intervalLeftToRight);
  rightToLeft();
  intervalLeftToRight = setInterval(leftToRight, 10000);
});

