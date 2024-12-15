const loginBtn = document.querySelector(".logInBtn");
const emailLogin = document.querySelector("#emailLogIn");
const passwordLogin = document.querySelector("#passwordLogIn")
const userInfo = JSON.parse(localStorage.getItem("user"));
const email = userInfo.email;
const password = userInfo.password;
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const emailValue = emailLogin.value;
    const passwordValue = passwordLogin.value;
    if (emailValue === email && passwordValue === password) {
        alert("Đăng nhập hợp lệ");
        window.location = "../home/home.html";
    } else {
        alert("Tài khoản và mật khẩu không hợp lệ");
    }
});
