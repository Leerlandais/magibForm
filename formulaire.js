const myForm = document.getElementById("myForm");
const goodL = document.getElementById("goodL");
const goodC = document.getElementById("goodC");
const goodN = document.getElementById("goodN");
const goodS = document.getElementById("goodS");
const goodA = document.getElementById("goodA");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const subButton = document.getElementById("subButton");
const togglePassword = document.querySelector("#togglePassword");

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var testDate = naissance.value;
    var dateToTest = testDate.substring(0, 4);
    console.log (testDate, dateToTest);
    if (parseInt(dateToTest) > 2006 || testDate === ""){
        goodA.style.display = "initial";
     return;   
    }
        if(password.length < 8){
            goodL.style.display = "initial";
            goodC.style.display = "none";
            goodN.style.display = "none";
            goodS.style.display = "none";
        }else if(/[A-Z]/.test(password) === false) {
            goodC.style.display = "initial";
            goodL.style.display = "none";
            goodN.style.display = "none";
            goodS.style.display = "none";
        }else if(/\d/.test(password) === false) {
            goodN.style.display = "initial";
            goodC.style.display = "none";
            goodL.style.display = "none";
            goodS.style.display = "none";
        }else if (/[!@#$%^,&;*()_+]/.test(password) === false) {
            goodS.style.display = "initial";
            goodC.style.display = "none";
            goodN.style.display = "none";
            goodL.style.display = "none";
        }else {
            document.querySelector("body").style.color = "green";
            goodL.style.display = "none";
            goodC.style.display = "none";
            goodN.style.display = "none";
            goodS.style.display = "none";
            setTimeout(function () {
                window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
            }, 1200);
        }

});

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    const butType = togglePassword.textContent === "Show" ? "Hide" : "Show";
    togglePassword.textContent = butType;
});