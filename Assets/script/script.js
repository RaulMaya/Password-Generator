// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
// Review password length
function generatePassword() {
  password = ""
  var passLength = parseInt(
    prompt(
      "Select the length of your password (Must be from 8 to 128 characters):",
      10
    )
  );
  console.log(passLength);
  if (/^[0-9.,]+$/.test(passLength)) {
    if (passLength < 8 || passLength > 128) {
      alert("Please enter a value between 8 and 128. Thanks.");
      password = "Please enter a value between 8 and 128. Thanks.";
      return;
    } 
  } else {
    alert("Invalid input. Please enter a valid input. Thanks.");
    password = "Invalid input. Please enter a valid input. Thanks.";
    return;
  }
}
// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
