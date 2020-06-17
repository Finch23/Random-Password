const range = document.getElementById('myRange');
let number = document.getElementById('myNumber');
let newPass = '';

range.addEventListener('input', sync)
number.addEventListener('input', sync)

function sync(e) {
    const value = e.target.value
    range.value = value
    number.value = value
}

function generate() {

    const length = number.value
    var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+';
    

    for(var i = 0, n = values.length; i < length; i++) {
        newPass = newPass + values.charAt(Math.floor(Math.random() * n)); 
    }   
    return newPass;
}

document.getElementById('generateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    generate();
    document.querySelector('#textarea').textContent = newPass;
  });

function copyPassword(){
    document.getElementById('copy').addEventListener('click', function() {
    document.querySelector('#textarea').select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
    });
};

copyPassword();
