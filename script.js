
function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle('light');
}

$( function() {
  var availableCoins = [
    "Albanian Lek", "Argentine Peso", "Armenian Dram", "Australian Dollar", 
    "Bitcoin", "Brazilian Real", "Brazilian Real Tourism", "British Pound", 
    "Canadian Dollar", "Cayman Islands Dollar", "Chinese Yuan", "Czech Koruna", 
    "Danish Krone", "Dogecoin", "Emirati Dirham", "Ethereum", "Euro", 
    "Fijian Dollar", "Ghanaian Cedi", "Hong Kong Dollar", "Hungarian Forint", 
    "Indian Rupee", "Israeli New Shekel", "Japanese Yen", "Jordanian Dinar", 
    "Kuwaiti Dinar", "Litecoin", "Mexican Peso", "Netherlands Antillean Guilder", 
    "New Zealand Dollar", "Norwegian Krone", "Polish Zloty", "Saudi Riyal", 
    "Singapore Dollar", "South African Rand", "South Korean Won", "Swedish Krona", 
    "Swiss Franc", "Thai Baht", "Turkish Lira", "US Dollar", "XRP"
];

  $("#changecoinright").on("click", function() {
    $("#rightcoin").autocomplete({
        source: availableCoins,
        minLength: 0,
        select: () => {
          Conversion()
        }
    }).autocomplete("search", ""); 
  });

  $("#changecoinleft").on("click", function() {
    $("#leftcoin").autocomplete({
        source: availableCoins,
        minLength: 0,
        select: () => {
          Conversion()
        }
    }).autocomplete("search", ""); 
  });
});

let numbertyped = document.getElementById('leftvalue').value

async function Conversion() {
  try {
    let responsexml = await fetch("currencies.xml");
    let str = await responsexml.text();  
    let parser = new DOMParser();
    let currencies = parser.parseFromString(str, "application/xml");
    let currencycodes = currencies.getElementsByTagName("*");
  
    for (let i = 1; i < currencycodes.length; i++) {
  
      if ((document.getElementById('leftcoin').value) + "/" + document.getElementById('rightcoin').value === currencycodes[i].textContent) {
        var currencycode = currencycodes[i].tagName;
        break
      } 
    }

    let response = await axios.get(
      "https://economia.awesomeapi.com.br/json/last/" + currencycode
    );

    let leftcurrencycode = currencycode.slice(0, currencycode.indexOf("-"));
    let rightcurrencycode = currencycode.slice(currencycode.indexOf("-") + 1);
    if (numbertyped === document.getElementById('leftvalue').value) {
      let convertednumber = response.data[leftcurrencycode + rightcurrencycode].ask * numbertyped;
      document.getElementById('rightvalue').value = convertednumber.toFixed(2);
    } if (numbertyped === document.getElementById('rightvalue').value) {
      let convertednumber = numbertyped / response.data[leftcurrencycode + rightcurrencycode].ask
      document.getElementById('leftvalue').value = convertednumber.toFixed(2);
    }

    document.getElementById("leftimage").src = "assets/Moedas/" + document.getElementById('leftcoin').value + ".webp";
    document.getElementById("rightimage").src = "assets/Moedas/" + document.getElementById('rightcoin').value + ".webp";

    document.getElementById('rightcurrencycode').textContent = rightcurrencycode;
    document.getElementById('leftcurrencycode').textContent = leftcurrencycode;

    let date = new Date();
    document.getElementById('lastupdate').textContent =
      'Sale price(ask) - Last update: ' + date.toUTCString();
  } catch (error) {
    document.getElementById('rightvalue').value = 'Error loading';
    document.getElementById('lastupdate').textContent =
      'Conversion between this currency pair is not available. Please change the pair and try a new conversion';
  }
}

Conversion();

document.getElementById('leftvalue').addEventListener('input', () => {
  numbertyped = document.getElementById('leftvalue').value
  Conversion();
})

document.getElementById('rightvalue').addEventListener('input', () => {
  numbertyped = document.getElementById('rightvalue').value
  Conversion();
})

setInterval(Conversion, 10000);