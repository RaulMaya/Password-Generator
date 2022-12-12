// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
