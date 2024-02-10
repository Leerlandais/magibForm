const myForm = document.getElementById("myForm");
const goodL = document.getElementById("goodL");
const goodC = document.getElementById("goodC");
const goodN = document.getElementById("goodN");
const goodS = document.getElementById("goodS");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const password = document.getElementById("password").value;
const subButton = document.getElementById("subButton");

myForm.addEventListener('submit', (event) =>{
event.preventDefault();
console.log(password);
});


