const prompt = require("prompt-sync")();

//  1 // check even or odd
// function checEvenorOdd(n) {
//   if (n % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(checEvenorOdd(4));

// 2  // check prime number

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

// 3 // factorial number

// function factorialNum(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum = sum * i;
//   }
//   return sum
// }
// console.log(factorialNum(2));

// 4 fibonaaci series

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




// 5 reverse a number

// function reverseNum(n){
//     let rev = 0;
//     while(n>0){
//         rev = (rev*10) + (n%10)
//         n= Math.floor(n/10)
//     }
//     return rev
// }
// console.log(reverseNum(1234))






// 6 palindrome -

// palindrome means = 121 =>✅
//                    123 => ❌
// function palindrome(n) {
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }

//   if (original === rev) {
//     return "palindrome";
//   } else {
//     return "not palindrome";
//   }
// }

// console.log(palindrome(123));





// 7  Armstrong Number -

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




// 10. GCD (Greatest Common Divisor)
// 🧠 Concept
// 👉 2 numbers ko jo sabse bada number divide kare

// Example:
// 12, 18
// common factors: 1,2,3,6 → answer = 6

// function GCD(a,b){
//   while(b!==0){
//   let temp = b;
//   b = a%b;
//   a = temp
//   }
//   return a
// }
// console.log(GCD(17,21))




// 11. LCM (Least Common Multiple)
// 🧠 Concept
// 👉 smallest number jo dono se divide ho

// Example:
// 12, 18 → LCM = 36

// 🧠 Easy Logic
// 👉 Formula:
// LCM = (a × b) / GCD

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// console.log(lcm(12, 18));




// 12. Leap Year
// 🧠 Concept
// 👉 February 29 wale saal

// Rule:
// 4 se divide ✔
// 100 se divide ❌
// ya 400 se divide ✔

// 🧠 Easy Logic
// 👉 Yaad:

// 4 → yes
// 100 → no
// 400 → yes

// function isLeapYear(n){
// if((n%4==0 && n%100 !==0) || (n%400==0)){
//   return "Leap year"
// }else{
//   return "not leap year"
// }
// }
// console.log(isLeapYear(2027))





// 13. Count Vowels & Consonants
// 🧠 Concept
// 👉 String me:


// vowels = a,e,i,o,u
// consonants = baaki letters

// let s = prompt("enter a string = ");
// let consonent = 0,
//     vowels = 0;

// for (let i = 0; i < s.length; i++) {
//   let ch = s.charAt(i);
//   switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":  vowels++;
//      break; 
//    default:consonent++;
//   }
// }
// console.log(vowels)
// console.log(consonent)






// 14. Reverse String
// 🧠 Concept
// 👉 string ko ulta karna


// function reverseStr(str){
//   let rev = ""

//   for(let i = str.lenght - 1; i>=0; i--){
//     rev += str[i]
//   }
//   return rev
// }
// console.log(reverseStr("ashish"))






// 15. Anagram
// 🧠 Concept


// 👉 same letters → different order

// Example:
// listen = silent ✔
// "evil" → "vile" ✔️


// function Anagram(s1,s2){
//  let a = s1.split('').sort().join('');
//  let b = s2.split('').sort().join('');

//  return a === b ? "anagram" : "not anagram"
 
// }
// console.log(Anagram("listen", "silent"))




// Q16 (Remove Duplicates from String)
// String diya hai → duplicate characters hatao
// programming → progamin

// 🧠 Concept (ELI5)

// 👉 Har character ko check karo
// 👉 Agar pehle aa chuka hai → skip
// 👉 Naya hai → add karo


// 💡 Logic
// ek empty string result
// loop chalao
// agar result me nahi hai → add karo


// function removeDuplicate(str){
//     let result = ""

//     for(let char of str){

//         if(!result.includes(char)){
//             result += char
//         }
//     }
//       return result;

// }
// console.log(removeDuplicate("programming"))





// Q17 — Second Largest in Array

// ❓ Question
// [10, 20, 5, 8]

// Output:
// 10

// 🧠 Concept (ELI5)
// 👉 Sabse bada alag
// 👉 dusra sabse bada alag


// function secondLargest(arr){

// arr.sort((a,b)=>b-a)

// return arr[1]

// }

// console.log(secondLargest([10,20,5,8]))





// Q18 — Linear Search

// ❓ Question
// Array me element dhundo

// 🧠 Concept
// 👉 ek ek check karo


function LinearSearch(arr,key){
  for(let num of arr){
    if(num == key){
        return "found"
    }
  }
  return "not found"

}

console.log(LinearSearch([1,2,3,4,],10))


// Q19 — Binary Search

// ⚠️ Important -
// 👉 Array sorted hona chahiye

// 💡 Logic -
// middle nikalo
// compare karo
// left ya right jao



