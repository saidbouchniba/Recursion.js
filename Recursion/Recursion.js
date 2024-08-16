//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

 function Leap_year(year) {
    //check if the year is divisble by 4
    if (year % 4 == 0) {
    //if it's divisible by 100 , it should also be divisible by 400 to be a leap year
    if (year % 100 ===0){
        return year % 400 ===0;
    }
    return true;
    }
return false;
   
}
//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

//Children (age <= 12): $10
//Teenagers (age 13-17): $15
//Adults (age >= 18): $20

function ticketprice(age) {
    var price=prompt("give me your age: ")
   if (age<=12) {
    price=10
   }
   else if(age>=13 && <=17){
    price=15
   }
   else{
    price=20
   }
   return price
}
//Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear.
 
function weather_adviser() {
    var temperature=prompt("what's the temprature today: ")
    var advice=""
   if (temperature<=15) {
    advice="dont forget your jacket"
   }
   else if(temperature>=15 && temperature<=25){
    advice="hood"
   }
   else{
   advice="t-shirt"
   }
   return advice
}

//Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fib(n){
    if (n==0 || n==1) {
       return 1
    }
    return fib(n-1) +fib(n+2)
}

//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function palindrome(str) {
    if (str.length==0 || str.length ==1) {
        return true
    }
    else if(str[0]==str[str.length-1]){
        palindrome(str.slice(1,str.length-1) )
    }
    else{
        return false
    }
}