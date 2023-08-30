console.clear() // start with clearing the console.

// Array of special characters to be included in password
const specialCharacters = [
  '@',   '%',   '+',  '\\', '/', "'", '!',  '#',  '$',  '^', '?',   ':',   ',',  ')',  '(', '}', '{',  ']',  '[',   '~', '-', '_',   '.' ];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l', 'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v', 'w',  'x', 'y',  'z'];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L', 'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // get users input on  and save this into a variable.
  let length = parseInt(
    prompt(`\n\t Let's set the password length. \n\n Enter a number between 10 and 64 characters.\n `));

    if (isNaN(length)) {
    alert("The character inputted is not a number.\n Please input a number, a recommended password length is 13 characters.")
      return     
    } else if (length < 10 || length > 64) {
      alert("The number inputted was not between 10 and 64.\n Please try again.")
      return 
    }

    let passwordCapitalLetters = confirm(`Now, please indicate if you want capital letters to be included: \n 'OK' = Yes, select 'Cancel' for No`);

    let passwordNumbers = confirm(`Now, please indicate if you want numbers to be included: \n 'OK' = Yes, select 'Cancel' for No`);

    let passwordSpecialCharacters = confirm(`Now, please indicate if you want special characters to be included: \n 'OK' = Yes, select 'Cancel' for No`);

    if (passwordCapitalLetters && passwordNumbers && passwordSpecialCharacters) {
      alert(`You have opted to have a password with Capital Letters, Numbers and Special Characters \n`);
          
    } else if (!passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
      alert(`You have opted to not have any Capital Letters, Numbers or Special Characters in the generated password \n`);
      
    } else if (passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
      alert(`You have opted to have a password with Capital Letters and Special Characters but No Numbers \n`);
      
    } else if (passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
      alert(`You have opted to have Numbers and Capital Letters but no Special Characters password \n`);

    } else if (!passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
      alert(`You have opted to have a password with Special Characters but No Numbers or Capital Letters\n`);

    } else if (!passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
      alert(`You have opted to have Numbers but no Capital Letters or Special Characters set within the generated password \n`);

    }  else if (passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
      alert(`You have opted to have a password generated with Capital Letters but without Numbers or Special Characters \n`);

    } 

    let outputPasswordOptions = {
      length: length,
      passwordCapitalLetters: passwordCapitalLetters,
      passwordNumbers: passwordNumbers,
      passwordSpecialCharacters: passwordSpecialCharacters
    }
    console.log(outputPasswordOptions)

    return outputPasswordOptions;

}

//getPasswordOptions()




// Funtion for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}


//Function to generate password with user input
function generatedPassword() {
  let options = getPasswordOptions();
  console.log(options)
  let result = []

  let possibleCharacters = []
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    
  let outputGeneratedPassword = []
  outputGeneratedPassword.push(getRandom(lowerCasedCharacters));

  if (options.passwordSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    outputGeneratedPassword.push(getRandom(specialCharacters));
  }
  
  if (options.passwordNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    outputGeneratedPassword.push(getRandom(numericCharacters));
  }

  if (options.passwordCapitalLetters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    outputGeneratedPassword.push(getRandom(upperCasedCharacters));
  }

  for (let index = 0; index < options.length; index++) {
    var generatedCharacters = getRandom(possibleCharacters);
    console.log(generatedCharacters);
    result.push(generatedCharacters);
  }

  for (let index = 0; index < outputGeneratedPassword.length; index++) {
    result[index] = outputGeneratedPassword[index]
  }

  return result.join("")
}


generatedPassword()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #generate input
function writePassword() {
  var password = generatedPassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

writePassword()

//Add event listener to generate button
generateBtn.addEventListener('click', writePassword);