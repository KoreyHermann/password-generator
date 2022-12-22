function generatePassword(){
  var match = [];
  
  var lowercasearray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
  var uppercasearray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  var numarray = ["1","2","3","4","5","6","7","8","9","0",];

  var specialarray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

  // password length prompt
  var pLength = window.prompt("How long do you want your password to be?", "Between 8 and 128 characters");
if (pLength < 8){
  window.alert("Too few characters");
  generatePassword();
} else if (pLength > 128){
  window.alert("Too many characters");
  generatePassword();
}
  //lowercase
  var lowercase = confirm("Should your password contain lowercase letters?");
    if (lowercase === true){
      match = match.concat(lowercasearray);
      console.log(match);
    }

  //uppercase
  var uppercase = confirm("Should your password contain uppercase letters?");
    if (uppercase === true){
      match = match.concat(uppercasearray);
      console.log(match);
  }

  //numerics
  var numerics = confirm("Should your password contain numbers?");
    if (numerics === true){
      match = match.concat(numarray);
      console.log(match);
  }

  //special characters
  var special = confirm("Should your password contain special characters?");
    if (special === true){
      match = match.concat(specialarray);
      console.log(match);
    }
    console.log(match);
  
   
  // password generator
  var password = [];
    for (let i = 0; i < pLength; i++) {
      password[i] = Math.floor(Math.random()*(match.length-1));
      password[i] = match[password[i]];
    
  }
  // displays password in style.css field
  var returnvar = password.join("");
  return returnvar;
}
 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
