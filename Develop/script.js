// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password; // Update the value using textContent

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Function to generate a random password based on the selected criteria
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Wrong password length.");
    return "";
  }

  var includeLowercase = confirm("Would you want to include lowercase characters? Cancel if not.");
  var includeUppercase = confirm("Would you want to include uppercase characters? Cancel if not.");
  var includeNumbers = confirm("Would you want to include numbers? Cancel if not.");
  var includeSpecial = confirm("Would you want to include special characters? Cancel if not.");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must select a type of character. Please try again.");
    return "";
  }

  var characters = "";
  if (includeLowercase) characters += lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSpecial) characters += special;

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomindex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomindex);
  }

  return password; // Return the generated password
}