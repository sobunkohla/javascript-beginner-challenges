//Q1 addition function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(-3, -5));

//Q2 convert hours to seconds

function convertHoursToSeconds(hours) {
  return hours * 60 * 60;
}

console.log(convertHoursToSeconds(10));

//Q3 CALCULATE the perimeter of a rectangle

function calcPerimeter(length, breath) {
  return length * 2 + breath * 2;
}

console.log(calcPerimeter(20, 10));

//Q4 calc area of triangle

function calcArea(base, height) {
  return 0.5 * base * height;
}
console.log(calcArea(10, 10));

//Q5 extending a string 


function appendFrontend (string) {
    return string + " Frontend";
}

console.log(appendFrontend("bananna"));

//Q6 Greater than 100? 


function sumGreaterThan100 (num1, num2) {
    return num1 + num2 >= 100;
}

console.log(sumGreaterThan100 (100, 50));

//Q7 less than or equal to 0 ?


function lessThanOrEqualTo0 (num) {
    return num <= 0;
}

console.log(lessThanOrEqualTo0 (-10));

//Q8 Opposite boolean

function oppositeBoolean (bool) {
    return !bool ;
}

console.log(oppositeBoolean (false));


//Q9 is not number 0

function isNotZero (num) {
    return num !== 0;
}

console.log (isNotZero (1));



//Q10 calculatehe remainder


function calcRemainder (num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder (7, 8));

//Q11 is the number odd?

function isOdd (num) {
  return num % 2 !== 0
}

console.log(isOdd(7))

//Q12 if number is even, return 1 otherwise return -1


function booleanInteger(num) {
 return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(2))

//Q13 Check if a user is logged in and subscribed 

function isLoggedInAndSubscribed(loggedInStatus, subscribedStatus) {
 return (loggedInStatus === "LOGGED_IN") && (subscribedStatus === "SUBSCRIBED") 
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED") )

///Q14 check if user is logged in or subscribed
function isLoggedInOrSubscribed(loggedInStatus, subscribedStatus) {
  return (loggedInStatus === "LOGGED_IN") || (subscribedStatus === "SUBSCRIBED") 
 }
 
 console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED") )

//Q15

//Q16


//Q17

//Q18


//Q19

//Q20

//Q21
