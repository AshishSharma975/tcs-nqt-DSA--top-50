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

function reverseNum(n){
    let rev = 0;
    while(n>0){
        rev = (rev*10) + (n%10)
        n= Math.floor(n/10)
    }
    return rev
}
console.log(reverseNum(1234))

//