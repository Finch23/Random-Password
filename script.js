var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
  ];


  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

function getPasswordOptions() {
    var length = parseInt(prompt(
        "How many characters would you like your password to be?"
    ));
};

if (isNaN(length) === true) {
    alert("Password has to be a number!");
};

if (length < 8) {
    alert("Password length must be at least 8 characters");
};

if (length > 128) {
    alert("Password length must be less than 129");
};

var hasSpecialCharacters = confirm("Click OK for your password to have special characters");
var hasNumbers = confirm("Click OK for your password to include numbers");
var hasUpperCase = confirm("Click OK for your password to include uppercase");
var hasLowerCase = confirm("Click OK for your password to include lowercase");



if (
    hasSpecialCharacters === false &&
    hasNumbers === false &&
    hasLowerCase === false &&
    hasUpperCase === false 
) {
    alert ("Must select at least one character type");
};

var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowercase: hasLowerCase,
    hasUpperCase: hasUpperCase
};

var options = getPasswordOptions(); 
var generate = document.getElementById("generate")
var password = document.getElementById("password")

generate.addEventListener("click", () => {
    const lengthEL = +length.value;
    const hasLower = hasLowerCase;
    const hasUpper = hasUpperCase;
    const hasnumbers = hasNumbers;
    const hasSpecials = hasSpecialCharacters;

    password.innerText = generatePassword(hasLower, hasUpper, hasnumbers, hasSpecials, lengthEL);
});

function generatePassword(
    lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters, lengthEL) {
    let generatedPassword = "";

    var typesCount = lowerCasedCharacters + upperCasedCharacters + numericCharacters + specialCharacters;

    var typesArr = [{ lowerCasedCharacters }, { upperCasedCharacters }, { numericCharacters }, { specialCharacters }].filter
    (
        item => Object.values(item)[0]
    );

    if (typesCount === 0) {
        return "";
    }

    for(i = 0; i < lengthEL; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
          
            generatedPassword += randomFunc[funcName]();
        });
    }
    
   var final = generatedPassword;
}

function getRandomLower() {
    lowerRandom = values.charAt(Math.floor(Math.random() * lowerCasedCharacters.length));
}

function getRandomUpper() {
    UpperRandom = values.charAt(Math.floor(Math.random() * upperCasedCharacters.length));
}
function getRandomNumber() {
    numberRandom = values.charAt(Math.floor(Math.random() * numericCharacters.length));
}
function getRandomSpecial() {
    specialRandom = values.charAt(Math.floor(Math.random() * specialCharacters.length));
}