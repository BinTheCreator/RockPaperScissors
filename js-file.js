const body = document.querySelector("body");
body.style.backgroundColor = "rgb(17, 24, 39)";
// body.innerHTML = "<p>Hey I'm red!</p>";
// body.style.color = "red";

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue"
const div = document.createElement("div"); 
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.innerHTML = "<p>ME TOO!</p>";


div.style.border = "black solid";
div.style.backgroundColor = "pink";

div.appendChild(h1);

document.body.appendChild(p);
document.body.appendChild(h3);
document.body.appendChild(div);