const prompt = require("prompt-sync")();

// // check even or odd
// function checEvenorOdd(n) {
//   if (n % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(checEvenorOdd(4));





// // check prime number

// function isPrime(n) {
//   if (n <= 0) {
//     return "not prime";
//   } else {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) count++;
//     }
//     if (count == 2) {
//       return "prime Number";
//     } else {
//       return "not Prime number";
//     }
//   }
// }

// console.log(isPrime(18));






// // factorial number

// function factorialNum(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum = sum * i;
//   }
//   return sum
// }
// console.log(factorialNum(2));





// fibonaaci series

// function fibonacci(n) {
//     let a = 0, b = 1;

//     for (let i = 1; i <= n; i++) {
//         console.log(a);
//         let c = a + b;
//         a = b;
//         b = c;
//     }
// }

// fibonacci(5);





// reverse a number

// function reverseNum(n){
//     let rev = 0;
//     while(n>0){
//         rev = (rev*10) + (n%10)
//         n= Math.floor(n/10)
//     }
//     return rev
// }
// console.log(reverseNum(1234))




//palindrome -

// palindrome means = 121 =>✅
//                    123 => ❌
function palindrome(n) {
  let original = n;
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  if (original === rev) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

console.log(palindrome(123));




// Armstrong Number - 

// 🧠 Concept
// 👉 Har digit ka cube karke sum karo

// Example:
// 153
// = 1³ + 5³ + 3³
// = 1 + 125 + 27 = 153 ✔

// function Armstrong(n){
//     let original = n;
//     let sum = 0

//     while(n!==0){
//         let digit = (n%10)
//         sum += digit*digit*digit;
//         n = Math.floor(n/10)
//     }
//     return original === sum ?"armstrong": "not armstrong"
// }
// console.log(Armstrong(153))






//  8. Sum of Digits
// 🧠 Concept
// 👉 Number ke sab digits ko add karna
// Example:
// 123 → 1+2+3 = 6

// function sumDigit(n){
//     let sum = 0;

//    while(n!==0){
//     sum += n%10;
//     n = Math.floor(n/10)
//    }
//    return sum
// }
// console.log(sumDigit(123456))


// 9. Largest of 3 Numbers
// 🧠 Concept

// 👉 3 numbers me sabse bada kaun?


// function Largest(a,b,c,d){
//  return Math.max(a,b,c,d)
// }
// console.log(Largest(10,45,65,86))


