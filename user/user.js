const nameLabel = document.querySelector(".name-label")
const emailLabel = document.querySelector(".email-label")
const backBtn = document.querySelector(".home-nav")
const userInfo = JSON.parse(localStorage.getItem("user"));
const nameValue = userInfo["name"]
const emailValue = userInfo["email"]

nameLabel.textContent = "Name : " + nameValue;
emailLabel.textContent = "Email : " + emailValue;
backBtn.addEventListener("click", function () {
    window.location.href = "../home/home.html";
})
// // Test
// const nameInput = document.querySelector(".name");
// const logoutBtn = document.querySelector(".logout")
//
// const userName = JSON.parse(localStorage.getItem("user"));
// const nameValue = userName["name"]
//
// nameInput.textContent = "Hi " + nameValue;
// 
// logoutBtn.addEventListener("click", function () {
//     //Xoa key cua localStorage
//     // localStorage.removeItem("user")
//     //Check localStorage
//     window.location.href = "./login.html";
// })