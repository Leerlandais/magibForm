const myForm = document.getElementById("myForm");
const goodLet = document.getElementById("goodLet");
const goodCap = document.getElementById("goodCap");
const goodNum = document.getElementById("goodNum");
const goodSym = document.getElementById("goodSym");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const subButton = document.getElementById("subButton");
const togglePassword = document.querySelector("#togglePassword");


function doThisNow(){
myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var testDate = naissance.value;
    goodA.textContent = "Date du Naissance";
    var dateToTest = testDate.substring(0, 4);
    console.log (testDate, dateToTest);
    if (parseInt(dateToTest) > 2023){
        goodA.textContent = "I wasn't born yesterday and you weren't born tomorrow. Nice try";
    }else if (parseInt(dateToTest) > 2006){
        return goodA.textContent = "Too young to access this site, sorry";
    
    }else if (testDate = "") {
        return;
    }else
        if(password.length >= 8){
            goodLet.style.color = "green";
        }else {
            goodLet.style.color = "red";
        }
        if(/[A-Z]/.test(password) === true) {
            goodCap.style.color = "green";
        }else {
            goodCap.style.color = "red";
        }
        if(/\d/.test(password) === true) {
            goodNum.style.color = "green";
        }else {
            goodNum.style.color = "red";
        }
        if (/[!@#$%^'"/=:.?<>&,;*()_+-]/.test(password) === true) {
            goodSym.style.color = "green";
        }else {
            goodSym.style.color = "red";
        }
        if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && ((/[!@#$%^,&;*()_+]/.test(password)))) {
            document.querySelector("body").style.color = "green";
            setTimeout(function () {
                window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
            }, 1200);
            
        }
    });
}
    togglePassword.addEventListener("click", function () {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        const butType = togglePassword.textContent === "Show" ? "Hide" : "Show";
        togglePassword.textContent = butType;
    });



// add red and green colours to spans