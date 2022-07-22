import { loadContacts } from "./contact";
import { loadHeader } from "./header";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

loadHeader();
loadHome();

const content = document.getElementById("content");
const homeButton = document.querySelector(".home_button");
const menuButton = document.querySelector(".menu_button");
const contactButton = document.querySelector(".contact_button");


homeButton.addEventListener("click", ()=>{
    content.removeChild(content.lastChild);
    loadHome();
});

menuButton.addEventListener("click", ()=>{
    content.removeChild(content.lastChild);
    loadMenu();
});

contactButton.addEventListener("click", ()=>{
    content.removeChild(content.lastChild);
    loadContacts();
});
