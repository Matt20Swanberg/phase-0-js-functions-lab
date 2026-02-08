// DIRECTIONS for calculateTax
// Create a function named calculateTax that takes a single parameter, amount, 
// representing a monetary value.
// The function should calculate a 10% tax on the amount and return the tax value.
function calculateTax(amount){
       return (amount * .1)
};

// DIRECTIONS for convertToUpperCase
// Create a function named convertToUpperCase that takes a single parameter, text, which is a string.
// The function should convert the string to uppercase and return the result.
function convertToUpperCase(text){
    return (text.toUpperCase())
};

// DIRECTIONS for findMaximum
// Create a function named findMaximum that takes two parameters, num1 and num2, which are numbers.
// The function should return the larger of the two numbers.
function findMaximum(num1, num2){
if (num1 > num2){
    return num1;
}
else {return num2;}
};

// DIRECTIONS for isPalindrome
// Create a function named isPalindrome that takes a single parameter, word, which is a string.
// The function should return true if the string is a palindrome (reads the same forward and backward), and false otherwise.
function isPalindrome(word){
    let normalWord = word.toLowerCase();
    const reversedWord = normalWord.split("").reverse().join("");
  if (word === reversedWord){
        return true
    }
    else{return false};
};

// DIRECTIONS for calculateDiscountedPrice
// Create a function named calculateDiscountedPrice that takes two parameters: originalPrice and discountPercentage.
// The function should calculate and return the price after applying the discount.
// For example, if originalPrice is $100 and discountPercentage is 20, the function should return $80.
function calculateDiscountedPrice(originalPrice, discountPercentage){
  // Calculate the amount of discount
  let discountAmount = originalPrice * (discountPercentage / 100);
  // Calculate the final price by subtracting the discount
  let finalPrice = originalPrice - discountAmount;

  return finalPrice;
};


// Console Logs for testing
/*
console.log(`Tax:  ${calculateTax(100)}`)
console.log(`After uppercase applied: ${convertToUpperCase("lab assingment")}`);
console.log(`Larger number is ${findMaximum(12, 12)}`);
console.log(`Is this word a palindrome: ${isPalindrome("racecar")}`)
console.log(`Discounted price: ${calculateDiscountedPrice(150, 20)}`)
*/

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };