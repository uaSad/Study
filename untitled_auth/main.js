window.addEventListener('DOMContentLoaded', function() {
    var authSubmitButton = document.getElementById('auth_submit_button');
    var onClick = function() {
        console.log(document.getElementById('auth_login').value);
        console.log(document.getElementById('auth_pass').value);
    };
    authSubmitButton.onclick = onClick;
}, false);


