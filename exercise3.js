// multiplication table
number = 9
for (let i = 1; i <= 10; i++) {
    console.log( number, " x ", i)
}

// plaindrome or not
const message = "madam"
console.log(typeof message)

// convert CM to Km
let CM = 300000
console.log(CM/100000, "Kilometer")

// number as currency (IDR)
let number2 = 1000
let currency = "Rp. "
let decimal = ",00"
console.log(currency,number2,decimal)

// alphabet
let alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let str = "qUiCk 11 bRown 12 fOx";

// console.log(str.length);

// ab = index ke 1
// abcde = index ke 4
// abcd = index ke 3

let result = "";

//

for (let i = 0; i < str.length; i++) {
  let flag = false;
  for (let j = 0; j < alphabetCapital.length; j++) {
    if (str[i] === alphabetCapital[j]) {
      flag = true;
      result += alphabet[j];
      break;
    } else if (str[i] === alphabet[j]) {
      flag = true;
      result += alphabetCapital[j];
      break;
    }
  }
  if (flag === false) {
    result += str[i];
  }
}

console.log(result);