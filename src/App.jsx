import { Input } from "../src/components/Input";
import { DropDown } from "../src/components/DropDown";
import { useState } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("United States Dollar");
  const [toCurrency, setToCurrency] = useState("Nepal Rupee");

  const data = [
    { country: "Algeria", currency: "Algerian Dinar", code: "DZD" },
    { country: "Angola", currency: "Angolan Kwanza", code: "AOA" },
    { country: "Benin", currency: "CFA Franc BCEAO", code: "XOF" },
    { country: "Botswana", currency: "Botswana Pula", code: "BWP" },
    { country: "Burkina Faso", currency: "CFA Franc BCEAO", code: "XOF" },
    { country: "Burundi", currency: "Burundian Franc", code: "BIF" },
    { country: "Cameroon", currency: "CFA Franc BEAC", code: "XAF" },
    { country: "Cape Verde", currency: "Cape Verdean Escudo", code: "CVE" },
    {
      country: "Central African Republic",
      currency: "CFA Franc BEAC",
      code: "XAF",
    },
    { country: "Chad", currency: "CFA Franc BEAC", code: "XAF" },
    { country: "Comoros", currency: "Comorian Franc", code: "KMF" },
    { country: "Congo (Republic)", currency: "CFA Franc BEAC", code: "XAF" },
    { country: "Congo (DRC)", currency: "Congolese Franc", code: "CDF" },
    { country: "Cote D’Ivoire", currency: "CFA Franc BCEAO", code: "XOF" },
    { country: "Djibouti", currency: "Djiboutian Franc", code: "DJF" },
    { country: "Egypt", currency: "Egypt Pound", code: "EGP" },
    { country: "Equatorial Guinea", currency: "CFA Franc BEAC", code: "XAF" },
    { country: "Eritrea", currency: "Eritrean Nakfa", code: "ERN" },
    { country: "Ethiopia", currency: "Ethiopian Birr", code: "ETB" },
    { country: "Gabon", currency: "CFA Franc BEAC", code: "XAF" },
    { country: "Gambia", currency: "Gambian Dalasi", code: "GMD" },
    { country: "Ghana", currency: "Ghanaian Cedi", code: "GHS" },
    { country: "Guinea", currency: "Guinean Franc", code: "GNF" },
    { country: "Namibia", currency: "Namibia Dollar", code: "NAD" },
    { country: "Niger", currency: "CFA Franc BCEAO", code: "XOF" },
    { country: "Nigeria", currency: "Nigeria Naira", code: "NGN" },
    { country: "Rwanda", currency: "Rwandan Franc", code: "RWF" },
    { country: "Senegal", currency: "CFA Franc BCEAO", code: "XOF" },
    { country: "Seychelles", currency: "Seychelles Rupee", code: "SCR" },
    { country: "Sierra Leone", currency: "Sierra Leonean Leone", code: "SLL" },
    { country: "Somalia", currency: "Somalia Shilling", code: "SOS" },
    { country: "South Africa", currency: "South Africa Rand", code: "ZAR" },
    { country: "Sudan", currency: "Sudanese Pound", code: "SDG" },
    {
      country: "Eswatini (Swaziland)",
      currency: "Swazi Lilangeni",
      code: "SZL",
    },
    { country: "Tanzania", currency: "Tanzanian Shilling", code: "TZS" },
    { country: "Armenia", currency: "Armenian Dram", code: "AMD" },
    { country: "Bangladesh", currency: "Bangladeshi Taka", code: "BDT" },
    { country: "Bhutan", currency: "Bhutanese Ngultrum", code: "BTN" },
    { country: "Brunei Darussalam", currency: "Brunei Dollar", code: "BND" },
    { country: "Cambodia", currency: "Cambodian Riel", code: "KHR" },
    { country: "China", currency: "China Yuan Renminbi", code: "CNY" },
    { country: "Hong Kong", currency: "Hong Kong Dollar", code: "HKD" },
    { country: "India", currency: "India Rupee", code: "INR" },
    { country: "Indonesia", currency: "Indonesia Rupiah", code: "IDR" },
    { country: "Japan", currency: "Japan Yen", code: "JPY" },
    { country: "North Korea", currency: "Korea (North) Won", code: "KPW" },
    { country: "South Korea", currency: "Korea (South) Won", code: "KRW" },
    { country: "Laos", currency: "Laos Kip", code: "LAK" },
    { country: "Macao (Macau)", currency: "Macanese Pataca", code: "MOP" },
    { country: "Malaysia", currency: "Malaysia Ringgit", code: "MYR" },
    { country: "Maldives", currency: "Maldivian Rufiyaa", code: "MVR" },
    { country: "Mongolia", currency: "Mongolia Tugrik", code: "MNT" },
    { country: "Myanmar", currency: "Myanma Kyat", code: "MMK" },
    { country: "Nepal", currency: "Nepal Rupee", code: "NPR" },
    { country: "Philippines", currency: "Philippines Peso", code: "PHP" },
    { country: "Russia", currency: "Russia Ruble", code: "RUB" },
    { country: "Singapore", currency: "Singapore Dollar", code: "SGD" },
    { country: "Sri Lanka", currency: "Sri Lanka Rupee", code: "LKR" },
    { country: "Taiwan", currency: "New Taiwan Dollar", code: "TWD" },
    { country: "Thailand", currency: "Thailand Baht", code: "THB" },
    { country: "Timor-Leste", currency: "United States Dollar", code: "USD" },
    { country: "Vietnam", currency: "Vietnam Dong", code: "VND" },
    { country: "Australia", currency: "Dollar (Australian)", code: "AUD" },
    { country: "Cook Islands", currency: "New Zealand Dollar", code: "NZD" },
    { country: "Kiribati", currency: "Dollar (Australian)", code: "AUD" },
    {
      country: "Marshall Islands",
      currency: "United States Dollar",
      code: "USD",
    },
    { country: "Nauru", currency: "Dollar (Australian)", code: "AUD" },
    { country: "New Caledonia", currency: "CFP Franc", code: "XPF" },
    { country: "New Zealand", currency: "New Zealand Dollar", code: "NZD" },
    { country: "Niue", currency: "New Zealand Dollar", code: "NZD" },
    { country: "Norfolk Island", currency: "Dollar (Australian)", code: "AUD" },
    {
      country: "Papua New Guinea",
      currency: "Papua New Guinean Kina",
      code: "PGK",
    },
    { country: "Pitcairn", currency: "New Zealand Dollar", code: "NZD" },
    {
      country: "Solomon Islands",
      currency: "Solomon Islands Dollar",
      code: "SBD",
    },
    { country: "Tonga", currency: "Tongan Pa’anga", code: "TOP" },
    { country: "Tuvalu", currency: "Dollar (Australian)", code: "AUD" },
    { country: "Vanuatu", currency: "Vatu", code: "VUV" },
    { country: "Wallis & Futuna", currency: "CFP Franc", code: "XPF" },
    { country: "Anguilla", currency: "East Caribbean Dollar", code: "XCD" },
    {
      country: "Antigua & Barbuda",
      currency: "East Caribbean Dollar",
      code: "XCD",
    },
    { country: "Aruba", currency: "Aruba Guilder", code: "AWG" },
    { country: "Bahamas", currency: "Bahamas Dollar", code: "BSD" },
    { country: "Barbados", currency: "Barbados Dollar", code: "BBD" },
    { country: "Bermuda", currency: "Bermuda Dollar", code: "BMD" },
    {
      country: "Cayman Islands",
      currency: "Cayman Islands Dollar",
      code: "KYD",
    },
    { country: "Cuba", currency: "Cuba Peso", code: "CUP" },
    { country: "Dominica", currency: "East Caribbean Dollar", code: "XCD" },
    {
      country: "Dominican Republic",
      currency: "Dominican Republic Peso",
      code: "DOP",
    },
    { country: "Grenada", currency: "East Caribbean Dollar", code: "XCD" },
    { country: "Haiti", currency: "Haitian Gourde", code: "HTG" },
    { country: "Jamaica", currency: "Jamaica Dollar", code: "JMD" },
    { country: "Montserrat", currency: "East Caribbean Dollar", code: "XCD" },
    { country: "Puerto Rico", currency: "United States Dollar", code: "USD" },
    {
      country: "Saint Kitts & Nevis",
      currency: "East Caribbean Dollar",
      code: "XCD",
    },
    { country: "Saint Lucia", currency: "East Caribbean Dollar", code: "XCD" },
    {
      country: "Saint Vincent & Grenadines",
      currency: "East Caribbean Dollar",
      code: "XCD",
    },
    {
      country: "Trinidad & Tobago",
      currency: "Trinidad & Tobago Dollar",
      code: "TTD",
    },
    {
      country: "Turks & Caicos Islands",
      currency: "United States Dollar",
      code: "USD",
    },
    {
      country: "British Virgin Islands",
      currency: "United States Dollar",
      code: "USD",
    },
    {
      country: "U.S. Virgin Islands",
      currency: "United States Dollar",
      code: "USD",
    },
    { country: "Albania", currency: "Albanian Lek", code: "ALL" },
    { country: "Andorra", currency: "Euro", code: "EUR" },
    { country: "Belarus", currency: "Belarus Ruble", code: "BYR" },
    {
      country: "Bosnia & Herzegovina",
      currency: "Convertible Marka",
      code: "BAM",
    },
    { country: "Norway", currency: "Norway Krone", code: "NOK" },
    { country: "Bulgaria", currency: "Bulgaria Lev", code: "BGN" },
    { country: "Croatia", currency: "Croatia Kuna", code: "HRK" },
    { country: "Cyprus", currency: "Euro", code: "EUR" },
    { country: "Czech Republic", currency: "Koruna", code: "CZK" },
    { country: "Denmark", currency: "Danish Krone", code: "DKK" },
    { country: "Estonia", currency: "Euro", code: "EUR" },
    {
      country: "Falkland Islands",
      currency: "Falkland Islands Pound",
      code: "FKP",
    },
    { country: "Finland", currency: "Euro", code: "EUR" },
    { country: "France", currency: "Euro", code: "EUR" },
    { country: "San Marino", currency: "Euro", code: "EUR" },
    { country: "Serbia", currency: "Serbian Dinar", code: "RSD" },
    { country: "Spain", currency: "Euro", code: "EUR" },
    { country: "Slovakia", currency: "Euro", code: "EUR" },
    { country: "Slovenia", currency: "Euro", code: "EUR" },
    { country: "Sweden", currency: "Swedish Krona", code: "SEK" },
    { country: "Switzerland", currency: "Swiss Franc", code: "CHF" },
    { country: "Ukraine", currency: "Hryvna", code: "UAH" },
    { country: "United Kingdom", currency: "Pound (Sterling)", code: "GBP" },
    { country: "Afghanistan", currency: "Afghani", code: "AFN" },
    { country: "Azerbaijan", currency: "New Manat", code: "AZN" },
    { country: "Bahrain", currency: "Bahraini Dinar", code: "BHD" },
    { country: "Iran", currency: "Rial", code: "IRR" },
    { country: "Iraq", currency: "Iraqi Dinar", code: "IQD" },
    { country: "Israel", currency: "Shekel", code: "ILS" },
    { country: "Jordan", currency: "Jordanian Dinar", code: "JOD" },
    { country: "Kazakhstan", currency: "Tenge", code: "KZT" },
    { country: "Kuwait", currency: "Kuwaiti Dinar", code: "KWD" },
    { country: "Kyrgyzstan", currency: "Som", code: "KGS" },
    { country: "Lebanon", currency: "Pound", code: "LBP" },
    { country: "Oman", currency: "Rial", code: "OMR" },
    { country: "Pakistan", currency: "Rupee", code: "PKR" },
    { country: "Qatar", currency: "Riyal", code: "QAR" },
    { country: "Saudi Arabia", currency: "Riyal", code: "SAR" },
    { country: "Syria", currency: "Pound", code: "SYP" },
    { country: "Tajikistan", currency: "Somoni", code: "TJS" },
    { country: "Turkey", currency: "Lira", code: "TRY" },
    { country: "Turkmenistan", currency: "Manat", code: "TMT" },
    { country: "United Arab Emirates", currency: "Dirham", code: "AED" },
    { country: "Uzbekistan", currency: "Som", code: "UZS" },
    { country: "Yemen", currency: "Rial", code: "YER" },
    { country: "Belize", currency: "Belize Dollar", code: "BZD" },
    { country: "Canada", currency: "Canada Dollar", code: "CAD" },
    { country: "Costa Rica", currency: "Costa Rica Colon", code: "CRC" },
    { country: "El Salvador", currency: "United States Dollar", code: "USD" },
    { country: "Guatemala", currency: "Guatemala Quetzal", code: "GTQ" },
    { country: "Honduras", currency: "Honduras Lempira", code: "HNL" },
    { country: "Mexico", currency: "Mexico Peso", code: "MXN" },
    { country: "Nicaragua", currency: "Nicaragua Cordoba", code: "NIO" },
    { country: "Panama", currency: "Balboa", code: "PAB" },
    { country: "United States", currency: "United States Dollar", code: "USD" },
    { country: "Argentina", currency: "Peso", code: "ARS" },
    { country: "Bolivia", currency: "Boliviano", code: "BOB" },
    { country: "Brazil", currency: "Real", code: "BRL" },
    { country: "Chile", currency: "Peso", code: "CLP" },
    { country: "Colombia", currency: "Peso", code: "COP" },
    { country: "Ecuador", currency: "United States Dollar", code: "USD" },
    { country: "Guyana", currency: "Guyana Dollar", code: "GYD" },
    { country: "Paraguay", currency: "Guarani", code: "PYG" },
    { country: "Peru", currency: "Nuevo Sol", code: "PEN" },
    { country: "Suriname", currency: "Suriname Dollar", code: "SRD" },
    { country: "Uruguay", currency: "Peso", code: "UYU" },
    { country: "Venezuela", currency: "Bolivar", code: "VEF" },
  ];


 
  const changValue = () => {
    data.map((option) => {
      console.log(option.currency);
    })
  };
  return (
    <div className="relative flex justify-center w-full text-xl">
      <div className="relative flex justify-center md:w-[70%] lg:w-[40%] top-20 md:top-50 p-4">
        <form className="relative flex flex-col items-center">
          <h1 className="md:text-3xl lg:text-4xl">Currency converter</h1>
          <h2 className="md:text-2xl lg:text-3xl">
            Accurate rates. Instant conversions.
          </h2>
          <div className="flex flex-col p-2">
            <div className="lg:flex md:gap-8 mt-8">
              <div className="mb-2">
                <Input
                  id="fromInput"
                  type="text"
                  value="not now"
                  onChange={changValue}
                />
              </div>
              <div>
                <DropDown
                  id="fromDropDown"
                  name="fromDropDown"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center p-2">
              <button className="flex justify-center text-center border px-4 py-2 hover:cursor-pointer">
                Swap
              </button>
            </div>
            <div className="lg:flex md:gap-8">
              <div className="mb-2">
                <Input
                  id="fromInput"
                  type="text"
                  value="not now"
                  onChange={changValue}
                />
              </div>
              <div>
                <DropDown
                  id="fromDropDown"
                  name="fromDropDown"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
