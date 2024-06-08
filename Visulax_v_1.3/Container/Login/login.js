const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    const signups = document.getElementsByClassName('sign-up');
    const signins = document.getElementsByClassName('sign-in');
    signin.style.opacity = 1;
    signup.style.opacity = 0;
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
