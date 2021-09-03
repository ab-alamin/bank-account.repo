document.getElementById('login-submit').addEventListener
('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password 
    const passwordField = document.getElementById
    ('user-password');
    const userPassword = passwordField.value;

    if (userEmail =='ala@gmail.com' && userPassword == '12345678') {
        window.location.href = 'BankPage.html';
    }
})

