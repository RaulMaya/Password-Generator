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
    } else {
      var lowerCase = prompt(
        "Do you want lowercase letters in your password (Type YES or NO)",
        "YES"
      );
      var upperCase = prompt(
        "Do you want uppercase letters in your password (Type YES or NO)",
        "YES"
      );
      var numericValues = prompt(
        "Do you want numeric values in your password (Type YES or NO)",
        "YES"
      );
      var specialSymbols = prompt(
        "Do you want special characters in your password (Type YES or NO)",
        "YES"
      );
      if (
        lowerCase === "YES" &&
        upperCase === "YES" &&
        numericValues === "YES" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIGJKLMNOPQRSTUVWXYZ0123456789#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "NO" &&
        numericValues === "NO" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols = "abcdefghijklmnopqrstuvwxyz#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "YES" &&
        numericValues === "NO" &&
        specialSymbols === "NO"
      ) {
        var availableSymbols =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIGJKLMNOPQRSTUVWXYZ";
      } else if (
        lowerCase === "NO" &&
        upperCase === "NO" &
        numericValues === "YES" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols = "0123456789#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "NO" &&
        numericValues === "YES" &&
        specialSymbols === "NO"
      ) {
        var availableSymbols = "0123456789abcdefghijklmnopqrstuvwxyz";
      } else if (
        lowerCase === "NO" &&
        upperCase === "YES" &&
        numericValues === "NO" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols = "ABCDEFGHIGJKLMNOPQRSTUVWXYZ#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "NO" &&
        upperCase === "YES" &&
        numericValues === "YES" &&
        specialSymbols === "NO"
      ) {
        var availableSymbols = "ABCDEFGHIGJKLMNOPQRSTUVWXYZ0123456789";
      } else if (
        lowerCase === "NO" &&
        upperCase === "YES" &&
        numericValues === "YES" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols =
          "ABCDEFGHIGJKLMNOPQRSTUVWXYZ0123456789#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "YES" &&
        numericValues === "YES" &&
        specialSymbols === "NO"
      ) {
        var availableSymbols =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIGJKLMNOPQRSTUVWXYZ0123456789#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "NO" &&
        numericValues === "YES" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols =
          "abcdefghijklmnopqrstuvwxyz0123456789#$%&/()?¡¿*¨[]{}-_";
      } else if (
        lowerCase === "YES" &&
        upperCase === "YES" &&
        numericValues === "NO" &&
        specialSymbols === "YES"
      ) {
        var availableSymbols =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIGJKLMNOPQRSTUVWXYZ#$%&/()?¡¿*¨[]{}-_";
      } else {
        alert('Please select two or more character types, to create your strong password.');
        password = "Please select two or more character types.";
        return;
      }
      for (var i = 0; i < passLength; i++) {
        var passCharacter = availableSymbols[Math.floor(Math.random() * availableSymbols.length)]
        password = password + passCharacter
      }
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
