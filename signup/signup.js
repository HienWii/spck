
// Input
const nameInput = document.querySelector("#nameSignUp");
const emailInput = document.querySelector("#emailSignUp");
const passwordInput = document.querySelector("#passwordSignUp");
const confirmInput = document.querySelector("#confirmPassword");
// Button 
const submitButton = document.querySelector("#signupBtn");
// Label
const passwordError = document.querySelector("#passwordError");

// Click button
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/; // Removed extra parenthesis
    const passwordValue = passwordInput.value.trim();
    const emailValue = emailInput.value.trim();
    if (!passwordValue.match(passwordRegex)) {
        passwordError.textContent = "Mật khẩu không hợp lệ";
        passwordError.classList.add("error");
    } else if (!passwordValue.match(confirmInput)) {
        passwordError.textContent = "Mật khẩu không khớp"
        passwordError.classList.add("error");
    } else {
        if (nameValue.length < 3) {
        } else {
            const information = JSON.stringify({
                name: nameValue,
                email: emailValue,
                password: passwordValue,

            });
            localStorage.setItem("user", information)
            alert("Sucess")
            window.location.href = "./home.html"
        }
    }
});
