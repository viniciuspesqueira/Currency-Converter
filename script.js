function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle('light');
}

const API_URL = 'https://economia.awesomeapi.com.br/json/last/';
const listcoins = {
  "United Arab Emirates Dirham": "AED",
  "Afghan Afghani": "AFN",
  "Albanian Lek": "ALL",
  "Armenian Dram": "AMD",
  "Netherlands Antillean Guilder": "ANG",
  "Angolan Kwanza": "AOA",
  "Argentine Peso": "ARS",
  "Australian Dollar": "AUD",
  "Azerbaijani Manat": "AZN",
  "Bosnia-Herzegovina Convertible Mark": "BAM",
  "Barbadian Dollar": "BBD",
  "Bangladeshi Taka": "BDT",
  "Bulgarian Lev": "BGN",
  "Bahraini Dinar": "BHD",
  "Burundian Franc": "BIF",
  "Brunei Dollar": "BND",
  "Bolivian Boliviano": "BOB",
  "Brazilian Real": "BRL",
  "Brazilian Real Turismo": "BRLT",
  "Bahamian Dollar": "BSD",
  "Bitcoin": "BTC",
  "Botswana Pula": "BWP",
  "Belarusian Ruble": "BYN",
  "Belize Dollar": "BZD",
  "Canadian Dollar": "CAD",
  "Swiss Franc": "CHF",
  "Swiss Franc RTS": "CHFRTS",
  "Chilean Peso": "CLP",
  "Chinese Yuan Offshore": "CNH",
  "Chinese Yuan": "CNY",
  "Colombian Peso": "COP",
  "Costa Rican Colón": "CRC",
  "Cuban Peso": "CUP",
  "Cape Verdean Escudo": "CVE",
  "Czech Koruna": "CZK",
  "Djiboutian Franc": "DJF",
  "Danish Krone": "DKK",
  "Dogecoin": "DOGE",
  "Dominican Peso": "DOP",
  "Algerian Dinar": "DZD",
  "Egyptian Pound": "EGP",
  "Ethiopian Birr": "ETB",
  "Ethereum": "ETH",
  "Euro": "EUR",
  "Fijian Dollar": "FJD",
  "British Pound Sterling": "GBP",
  "Georgian Lari": "GEL",
  "Ghanaian Cedi": "GHS",
  "Gambian Dalasi": "GMD",
  "Guinean Franc": "GNF",
  "Guatemalan Quetzal": "GTQ",
  "Hong Kong Dollar": "HKD",
  "Honduran Lempira": "HNL",
  "Croatian Kuna": "HRK",
  "Haitian Gourde": "HTG",
  "Hungarian Forint": "HUF",
  "Indonesian Rupiah": "IDR",
  "Israeli New Shekel": "ILS",
  "Indian Rupee": "INR",
  "Iraqi Dinar": "IQD",
  "Iranian Rial": "IRR",
  "Icelandic Króna": "ISK",
  "Jamaican Dollar": "JMD",
  "Jordanian Dinar": "JOD",
  "Japanese Yen": "JPY",
  "Japanese Yen RTS": "JPYRTS",
  "Kenyan Shilling": "KES",
  "Kyrgyzstani Som": "KGS",
  "Cambodian Riel": "KHR",
  "Comorian Franc": "KMF",
  "South Korean Won": "KRW",
  "Kuwaiti Dinar": "KWD",
  "Cayman Islands Dollar": "KYD",
  "Kazakhstani Tenge": "KZT",
  "Lao Kip": "LAK",
  "Lebanese Pound": "LBP",
  "Sri Lankan Rupee": "LKR",
  "Lesotho Loti": "LSL",
  "Litecoin": "LTC",
  "Libyan Dinar": "LYD",
  "Moroccan Dirham": "MAD",
  "Moldovan Leu": "MDL",
  "Malagasy Ariary": "MGA",
  "Macedonian Denar": "MKD",
  "Burmese Kyat": "MMK",
  "Mongolian Tögrög": "MNT",
  "Macanese Pataca": "MOP",
  "Mauritanian Ouguiya": "MRO",
  "Mauritian Rupee": "MUR",
  "Maldivian Rufiyaa": "MVR",
  "Malawian Kwacha": "MWK",
  "Mexican Peso": "MXN",
  "Malaysian Ringgit": "MYR",
  "Mozambican Metical": "MZN",
  "Namibian Dollar": "NAD",
  "Nigerian Naira": "NGN",
  "Nicaraguan Córdoba": "NIO",
  "Norwegian Krone": "NOK",
  "Nepalese Rupee": "NPR",
  "New Zealand Dollar": "NZD",
  "Omani Rial": "OMR",
  "Panamanian Balboa": "PAB",
  "Peruvian Sol": "PEN",
  "Papua New Guinean Kina": "PGK",
  "Philippine Peso": "PHP",
  "Pakistani Rupee": "PKR",
  "Polish Złoty": "PLN",
  "Paraguayan Guaraní": "PYG",
  "Qatari Rial": "QAR",
  "Romanian Leu": "RON",
  "Serbian Dinar": "RSD",
  "Russian Ruble": "RUB",
  "Rwandan Franc": "RWF",
  "Saudi Riyal": "SAR",
  "Seychellois Rupee": "SCR",
  "Sudanese Pound": "SDG",
  "Swedish Krona": "SEK",
  "Singapore Dollar": "SGD",
  "Somali Shilling": "SOS",
  "São Tomé and Príncipe Dobra": "STD",
  "Salvadoran Colón": "SVC",
  "Syrian Pound": "SYP",
  "Swazi Lilangeni": "SZL",
  "Thai Baht": "THB",
  "Tajikistani Somoni": "TJS",
  "Turkmenistani Manat": "TMT",
  "Tunisian Dinar": "TND",
  "Turkish Lira": "TRY",
  "Trinidad and Tobago Dollar": "TTD",
  "New Taiwan Dollar": "TWD",
  "Tanzanian Shilling": "TZS",
  "Ukrainian Hryvnia": "UAH",
  "Ugandan Shilling": "UGX",
  "United States Dollar": "USD",
  "Tether (USD)": "USDT",
  "Uruguayan Peso": "UYU",
  "Uzbekistani Som": "UZS",
  "Venezuelan Bolívar": "VEF",
  "Vietnamese Dong": "VND",
  "Vanuatu Vatu": "VUV",
  "Central African CFA Franc": "XAF",
  "Silver": "XAGG",
  "Brent Spot": "XBR",
  "East Caribbean Dollar": "XCD",
  "West African CFA Franc": "XOF",
  "CFP Franc": "XPF",
  "XRP": "XRP",
  "Yemeni Rial": "YER",
  "South African Rand": "ZAR",
  "Zambian Kwacha": "ZMK",
  "Zimbabwean Dollar": "ZWL",
  "Gold": "XAU",
  "Solana": "SOL",
  "Binance Coin": "BNB"
}
const inputleft = document.getElementById('leftvalue');
const inputright = document.getElementById('rightvalue');

async function leftToRight() {
  try {
    let leftcoin = document.getElementById('leftcoin').textContent;
    let rightcoin = document.getElementById('rightcoin').textContent;
    let leftcurrencycode = listcoins[leftcoin];
    let rightcurrencycode = listcoins[rightcoin];
    let response = await axios.get(API_URL + leftcurrencycode + '-' + rightcurrencycode);
    let numbertyped = document.getElementById('leftvalue').textContent;
    let convertednumber = response.data[leftcurrencycode + rightcurrencycode].ask * numbertyped;
    let date = new Date();
    
    document.getElementById('rightcurrencycode').textContent = rightcurrencycode;
    document.getElementById('leftcurrencycode').textContent = leftcurrencycode
    document.getElementById('rightvalue').textContent =
      convertednumber.toFixed(2);
    document.getElementById('lastupdate').textContent =
      'Sale price(ask) - Last update: ' + date.toUTCString();
  } catch (error) {
    document.getElementById('rightvalue').textContent = 'Error loading';
    document.getElementById('lastupdate').textContent =
      'Conversion between this currency pair is not available. Please change the pair and try a new conversion';
  }
}

async function rightToLeft() {
  try {
    let leftcoin = document.getElementById('leftcoin').textContent;
    let rightcoin = document.getElementById('rightcoin').textContent;
    let leftcurrencycode = listcoins[leftcoin];
    let rightcurrencycode = listcoins[rightcoin];
    let response = await axios.get(API_URL + leftcurrencycode + '-' + rightcurrencycode);
    let numbertyped = document.getElementById('rightvalue').textContent;
    let convertednumber = numbertyped / response.data[leftcurrencycode + rightcurrencycode].ask;
    let date = new Date();

    document.getElementById('rightcurrencycode').textContent = rightcurrencycode;
    document.getElementById('leftcurrencycode').textContent = leftcurrencycode;
    document.getElementById('leftvalue').textContent = convertednumber.toFixed(2);
    document.getElementById('lastupdate').textContent =
      'Sale price(ask) - Last update: ' + date.toUTCString();
  } catch (error) {
    document.getElementById('leftvalue').textContent = 'Error loading';
    document.getElementById('lastupdate').textContent =
      'Conversion between this currency pair is not available. Please change the pair and try a new conversion';
  }
}

leftToRight();

inputleft.addEventListener('input', leftToRight);
inputright.addEventListener('input', rightToLeft);
