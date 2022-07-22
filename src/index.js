import { loadHeader } from "./header";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

loadHeader();
loadHome();

const content = document.getElementById("content");
const homeButton = document.querySelector(".home_button");
const menuButton = document.querySelector(".menu_button");


homeButton.addEventListener("click", ()=>{
    removeAllChildNodes(content);
    loadHeader();
    loadHome();
});

menuButton.addEventListener("click", ()=>{
    removeAllChildNodes(content);
    loadHeader();
    loadMenu();
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}