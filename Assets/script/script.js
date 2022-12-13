// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
// Review password length
function generatePassword() {
  password = "";
  var passLength = prompt(
    "Select the length of your password (Must be from 8 to 128 characters):",
    10
  );
  console.log(passLength);
  console.log(typeof passLength);
  if (passLength == null) {
    console.log("Im Null");
  }
  if (/^[0-9.,]+$/.test(passLength)) {
    if (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
      alert("Please enter a value between 8 and 128. Thanks.");
      password = "Please enter a value between 8 and 128. Thanks.";
      return;
    } else {
      var lowerCase = prompt(
        "Do you want lowercase letters in your password (Type YES or NO)",
        "YES"
      );
      if (
        lowerCase.toUpperCase() === "YES" ||
        lowerCase.toUpperCase() === "NO"
      ) {
      } else if (lowerCase.toLocaleUpperCase() == null) {
        return;
      } else {
        alert("Invalid input. Please enter a valid input. Thanks.");
        return;
      }
      var upperCase = prompt(
        "Do you want uppercase letters in your password (Type YES or NO)",
        "YES"
      );
      if (
        upperCase.toUpperCase() === "YES" ||
        upperCase.toUpperCase() === "NO"
      ) {
      } else if (upperCase.toLocaleUpperCase() == null) {
        return;
      } else {
        alert("Invalid input. Please enter a valid input. Thanks.");
        return;
      }
      var numericValues = prompt(
        "Do you want numeric values in your password (Type YES or NO)",
        "YES"
      );
      if (
        numericValues.toUpperCase() === "YES" ||
        numericValues.toUpperCase() === "NO"
      ) {
      } else if (numericValues.toLocaleUpperCase() == null) {
        return;
      } else {
        alert("Invalid input. Please enter a valid input. Thanks.");
        return;
      }
      var specialSymbols = prompt(
        "Do you want special characters in your password (Type YES or NO)",
        "YES"
      );
      if (
        specialSymbols.toUpperCase() === "YES" ||
        specialSymbols.toUpperCase() === "NO"
      ) {
      } else if (specialSymbols.toLocaleUpperCase() == null) {
        return;
      } else {
        alert("Invalid input. Please enter a valid input. Thanks.");
        return;
      }
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
        (upperCase === "NO") & (numericValues === "YES") &&
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
        alert(
          "Please select two or more character types, to create your strong password."
        );
        password = "Please select two or more character types.";
        return;
      }
      for (var i = 0; i < passLength; i++) {
        var passCharacter =
          availableSymbols[Math.floor(Math.random() * availableSymbols.length)];
        password = password + passCharacter;
      }
    }
  } else if (passLength == null) {
    return;
  } else {
    alert("Invalid input. Please enter a valid input. Thanks.");
    return;
  }
}
// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
    console.log(passLength);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
