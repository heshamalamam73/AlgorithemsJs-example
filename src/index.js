// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// Check AnagramS of trings

function checkAnagramStrings(a, b) {
  // check length of both string
  if (a.length !== b.length) {
    return false;
  }
  // make array from string, sort the array, and make string
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");

  // compare both string
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
