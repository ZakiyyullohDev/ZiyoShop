const email = document.getElementById('email');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const loginForm = document.getElementById('loginForm');
const emailHtml = document.getElementById('emailHtml');
const userNameHtml = document.getElementById('userNameHtml');
const lastNameHtml = document.getElementById('lastNameHtml');
const passwordHtml = document.getElementById('passwordHtml');
const userInfoWrapper = document.getElementById('userInfoWrapper');
const resetUserInfoBtn = document.getElementById('resetUserInfoBtn');

resetUserInfoBtn.addEventListener('click', ()=> {
    localStorage.removeItem('UserInfo')
})

let userInfo = JSON.parse(localStorage.getItem('UserInfo')) || [];

const addUserInfo = () => {
    localStorage.setItem('UserInfo', JSON.stringify(userInfo));
};

const displayUserInfo = () => {
    if (userInfo.length > 0) {
        const user = userInfo[0];
        userNameHtml.textContent = user.UserName;
        lastNameHtml.textContent = user.LastName;
        emailHtml.textContent = user.Email;
        passwordHtml.textContent = user.Password;
        loginForm.style.display = 'none';
        userInfoWrapper.style.display = 'flex';
    } else {
        loginForm.style.display = 'flex';
        userInfoWrapper.style.display = 'none';
    }
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (username.value && lastname.value && email.value && password.value) {
        userInfo = [{
            UserName: username.value,
            LastName: lastname.value,
            Email: email.value,
            Password: password.value
        }];
        addUserInfo();
        username.value = '';
        lastname.value = '';
        email.value = '';
        password.value = '';
        displayUserInfo();
    } else {
        alert('Xatolik Yuz Berdi!');
    }
});

displayUserInfo();
