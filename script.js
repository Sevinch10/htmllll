let name = prompt("Ismingizni kiriting:"); 
let age = prompt("Yoshingizni kiriting:"); 

let resultDiv = document.createElement("div");
resultDiv.textContent = `Ismingiz: ${name}, Yoshingiz: ${age}`; 


resultDiv.style.color = "blue";
resultDiv.style.fontSize = "20px";
resultDiv.style.fontWeight = "bold";
resultDiv.style.margin = "10px 0";


document.body.appendChild(resultDiv);
