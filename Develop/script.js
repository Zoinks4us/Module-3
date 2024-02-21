// Assignment code here

let passLength = parseInt(window.prompt('How long would you like the password to be?'));
let passPool = [];
  
function generatePrompts(){
  const numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
  
  
  
  console.log(passLength);
  if(passLength < 8 || passLength > 128){
    alert('Password must between 8 and 128 characters long');
    return false;
  }
    if(window.confirm('Do you want uppercase letters?')){
      passPool =passPool.concat(uppercase);
    }
    console.log(passPool);
    if(window.confirm('Do you want lowercase letters?')){
      passPool =passPool.concat(lowercase);
    }
    console.log(passPool);
    if(window.confirm('Do you want numbers?')){
      passPool =passPool.concat(numbers);
    }
    console.log(passPool);
    if(window.confirm('Do you want special characters?')){
      passPool =passPool.concat(symbols);
    }
    console.log(passPool);
   
    


  

  
}
function generatePassword() {
  finalPassword = "";
  for(var i = 0; i < passLength; i++){
    var random = Math.floor(Math.random() * passPool.length);
    
    finalPassword = finalPassword + passPool[random];
  }
  return finalPassword;


  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  generatePrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
