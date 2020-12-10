// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword() {

  /* Start declarations */
  const setLCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const setUCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const setSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{ ", "|", "}", "~"];
  const setNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var pwdLength = -1;
  var maxSet = [];
  var password = "";
  /* End declarations */

  /* Ask user how long password should be */
  do {
    pwdLength = prompt("How many characters would you like in your password?\nEnter a number between 8 and 128");
  } while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128);

  pwdLength = Math.ceil(pwdLength); // Account for people entering in non-whole numbers.

  /* Ask user to include lowercase letters */
  var includeLCase = confirm("Would you like to include lowercase letters?\nClick 'Ok' for 'Yes' or 'Cancel' for 'No'.");
  if (includeLCase) {
    maxSet = maxSet.concat(setLCase);
  }

  /* Ask user to include uppercase letters */
  var includeUCase = confirm("Would you like to include uppercase letters?\nClick 'Ok' for 'Yes' or 'Cancel' for 'No'.");
  if (includeUCase) {
    maxSet = maxSet.concat(setUCase);
  }

  /* Ask user to include special characters */
  var includeSpecial = confirm("Would you like to include special characters?\nClick 'Ok' for 'Yes' or 'Cancel' for 'No'.");
  if (includeSpecial) {
    maxSet = maxSet.concat(setSpecial);
  }

  /* Ask user to include numbers */
  var includeNumbers = confirm("Would you like to include numbers?\nClick 'Ok' for 'Yes' or 'Cancel' for 'No'.");
  if (includeNumbers) {
    maxSet = maxSet.concat(setNumbers);
  }

  /* Confirm any characters have been included */
  if (!includeLCase && !includeUCase && !includeSpecial && !includeNumbers){
    password = "You didn't select any characters. Please try again with at least one selection."
  } else {
  /* Create password */
  for (i = 0; i < pwdLength; i++) {
    password = password + maxSet[getRndInteger(0, maxSet.length)];
  }
}
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);