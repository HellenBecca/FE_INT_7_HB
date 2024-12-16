
// Asks the user to enter a target currency and a value
const currency =prompt("Add currency, EUR, SEK or AUD");
const val = prompt("Add value")

// Checks the selected currency and perform the conversion
if(currency=== "EUR"){
    console.log(val * 0.9);
}else if (currency=== "SEK"){
    console.log(val *12);
}else if (currency === "AUD"){
    console.log(val *0.64);

// Opens an external currency converter if the input is invalid.

}else {
    window.open("https://www.xe.com/currencyconverter/")
}