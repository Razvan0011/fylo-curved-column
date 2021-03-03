const btn = document.querySelector(".subscribe-btn");
const email = document.querySelector(".form-email");
const alertMsg = document.querySelector(".alert");

btn.addEventListener("click", (e) => {
    // console.log("It works")
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        alertMsg.style.display = "none";

    } else {
        alertMsg.style.display = "block";
    }
    e.preventDefault();
});