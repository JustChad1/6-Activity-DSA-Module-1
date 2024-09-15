//Convert a String to a Number//

//Create a variable named price and assign it the string value "200".
let price = "200";

//Convert price into a number using three different methods: parseInt(), Number(), and the + operator.

//parseInt()//
priceInt = parseInt(price);

//Number()//
priceNumber = Number(price);

//+ operator//
pricePlus = +price;

//Log the result to the console after each conversion.
console.log(priceInt); //200
console.log(priceNumber); //200
console.log(pricePlus); //200
console.log(typeof price); //string




//Convert a Number to a String//

//Create a variable named distance and assign it the number value 150.
let distance = 150;

//Convert distance into a string using two methods: .toString() and String().

//toString()//
distanceString = distance.toString();

//String()//
distanceStringNum = String(distance);

//Log the result to the console after each conversion.
console.log(distance); //150
console.log(distanceStringNum); //150
console.log(typeof distance); //number




//Convert a String to a Decimal Number//

//Create a variable named weight and assign it the string value "72.5".
let weight = "72.5";

//Convert weight into a decimal number using parseFloat().
weight = parseFloat(weight);

//Log the result to the console.
console.log(weight); //72.5
console.log(typeof weight); //number