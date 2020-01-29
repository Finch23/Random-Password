var plength = prompt('How long would you like your password to be? (8-126)');

let newPass = '';


function generate() {

    var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+';
    

    for(var i = 0, n = values.length; i < plength; i++) {
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
