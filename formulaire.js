const myForm = document.getElementById("myForm");
const goodL = document.getElementById("goodL");
const goodC = document.getElementById("goodC");
const goodN = document.getElementById("goodN");
const goodS = document.getElementById("goodS");
const goodA = document.getElementById("goodA");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const password = document.getElementById("password").value;
const subButton = document.getElementById("subButton");

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var testDate = naissance.value;
    var dateToTest = testDate.substring(0, 4);
    console.log (testDate, dateToTest);
    if (parseInt(dateToTest) > 2006 || testDate === ""){
        goodA.style.opacity = 1;
     return;   
    }
        if(password.length < 8){
            goodL.style.opacity = 1;
        }else if(/[A-Z]/.test(password) === false) {
            goodC.style.opacity = 1;
        }else if(/\d/.test(password) === false) {
            goodN.style.opacity = 1;
        }else if (/[!@#$%^,&;*()_+]/.test(password) === false) {
            goodS.style.opacity = 1;
        }else {
            document.querySelector("body").style.color = "green";
            setTimeout(function () {
                window.location.href = "https://2023.webdev-cf2m.be/Lee/Site/";
            }, 1200);
        }

});


