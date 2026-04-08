async function loadLayout(){

const header = await fetch("/layouts/header.html");
const headerHTML = await header.text();

document.getElementById("header").innerHTML = headerHTML;

const footer = await fetch("/layouts/footer.html");
const footerHTML = await footer.text();

document.getElementById("footer").innerHTML = footerHTML;

}

loadLayout();

function logout(){

localStorage.removeItem("auth");

window.location="login.html";

}