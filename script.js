// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword() {

  /* Start declarations */
  const setLCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const setUCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const setSpecial = ["!", "#", "$", "%", "&", "*", "+", "=", "?", "@", "^"];
  const setNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  maxSet = [];
  password = "";
  /* End declarations */

  /* Ask user how long password should be */
  var pwdLength = prompt("Password Length?\nEnter a number between 1 and 128");
  pwdLength = Math.ceil(pwdLength); // Account for people entering in non-whole numbers.

  /* Ask user to include lowercase letters */
  var includeLCase = confirm("Would you like to include lowercase letters?");
  if (includeLCase) {
    maxSet = maxSet.concat(setLCase);
  }

  /* Ask user to include uppercase letters */
  var includeUCase = confirm("Would you like to include uppercase letters?");
  if (includeUCase) {
    maxSet = maxSet.concat(setUCase);
  }

  /* Ask user to include special characters */
  var includeSpecial = confirm("Would you like to include special characters?");
  if (includeSpecial) {
    maxSet = maxSet.concat(setSpecial);
  }

  /* Ask user to include numbers */
  var includeNumbers = confirm("Would you like to include numbers?");
  if (includeNumbers) {
    maxSet = maxSet.concat(setNumbers);
  }

  /* Create password */
  for (i = 0; i < pwdLength; i++) {
    password = password + maxSet[getRndInteger(0, maxSet.length)];
  }

  /* Write new password in textarea on site */
  document.getElementById("password").value = password;
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
