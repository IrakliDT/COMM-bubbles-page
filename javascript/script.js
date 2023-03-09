// mouse cursor

const blobCursor = document.querySelector('#blobCursor');
// var timeout;


document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;


    blobCursor.style.top = y + "px"
    blobCursor.style.left = x + "px"


    // blobCursor.style.top = (e.pageY -50) + "px"
    // blobCursor.style.left = (e.pageX -50) + "px"
    
    blobCursor.style.display = "block"
    

})


//function mouse stopped
// function mouseStopped() {
//     blobCursor.style.display = "none"
// }
// timeout = setTimeout(mouseStopped, 1)



// LOGIN PAGE
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Idatia" && password === "comm") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})