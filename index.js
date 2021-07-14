function validate() {
    var user = document.getElementById("username").value
    var mail = document.getElementById('email').value
    var pw = document.getElementById('password').value
    var cpw = document.getElementById('cpassword').value

    checkUserName(user);
    checkEMail(mail);
    checkPassword(pw);
    checkCPassword(pw, cpw);
}

function checkUserName(user) {
    if (user.length > 7) {
        document.getElementById('username').classList.add('sucess');
        document.getElementById('username').classList.replace('err', 'sucess');
        document.getElementById('username_Error').innerText = '';
    }
    else {
        document.getElementById('username').classList.add('err');
        document.getElementById('username_Error').innerText = 'UserName Must Contain Min 8 Letters';

    }
}

function checkEMail(mail) {
    if (mail.length > 7 && mail.includes('@gmail.com')) {
        document.getElementById('email').classList.add('sucess');
        document.getElementById('email').classList.replace('err', 'sucess');
        document.getElementById('email_Error').innerText = '';
    }
    else {
        document.getElementById('email').classList.add('err');
        document.getElementById('email_Error').innerText = 'Invalid MailId';

    }
}

function checkPassword(pw) {
    if (pw.length > 7) {
        document.getElementById('password').classList.add('sucess');
        document.getElementById('password').classList.replace('err', 'sucess');
        document.getElementById('password_Error').innerText = '';
    }
    else {
        document.getElementById('password').classList.add('err');
        document.getElementById('password_Error').innerText = 'Password Must contain min 8 Letter';

    }
}

function checkCPassword(pw, cpw) {
    if (pw === cpw) {
        document.getElementById('cpassword').classList.add('sucess');
        document.getElementById('cpassword').classList.replace('err', 'sucess');
        document.getElementById('cpassword_Error').innerText = '';
    }
    else {
        document.getElementById('cpassword').classList.add('err');
        document.getElementById('cpassword_Error').innerText = 'Password Not Matched';
    }

}