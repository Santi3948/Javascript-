// toLocalString() = returns a string with a languaje
//                   sensitive representation of this number

// number.toLocalString(locale, {options});

// 'locale' = specify that languaje (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);