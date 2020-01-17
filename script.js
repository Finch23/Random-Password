var plength = prompt('How long would you like your password to be? (8-126)');

function generate() {
    var passlength = plength;

    var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+';

        let newPass = '';

        for(var i = 0; i <= passlength; i++) {
            newPass = newPass + values.charAt(Math.floor(Math.random() + Math.floor(values.length - 1))); 
        }
}

document.getElementById('generateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    generate();
    document.querySelector('textarea').textContent = newPass;
  });
