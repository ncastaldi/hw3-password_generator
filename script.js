// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  /* Start declarations */
  var setLCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var setUCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var setSpecial = ["!", "#", "$", "%", "&", "*", "+", "=", "?", "@", "^"];
  var setNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  maxSet = [];
  password = [];
  /* End declarations */
  
  /* Ask user how long password should be */
  var pwdLength = prompt("Password Length?\nEnter a number between 1 and 128");
  pwdLength = Math.ceil(pwdLength); // Account for people entering in non-whole numbers.

  var includeLCase = confirm("Would you like to include lowercase letters?");
  if (includeLCase) {
    for (i = 0; i < setLCase.length); i++{
      maxSet[i] = setLCase[i];
    }
  }

  for (i = 0; i <= maxSet; i++) {
    password[i] = maxSet[Math.random(maxSet)];
    }
  
  return password;
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
