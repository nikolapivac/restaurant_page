const loadHeader = () => {
    const content = document.getElementById("content");
    // title
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "food island"
    content.appendChild(title);

    // menu
    const menu = document.createElement("div");
    menu.classList.add("menu");
        // buttons
    const button1 = document.createElement("button");
    button1.classList.add("home_button");
    button1.textContent = "home";
    const button2 = document.createElement("button");
    button2.classList.add("menu_button");
    button2.textContent = "menu"
    const button3 = document.createElement("button");
    button3.classList.add("contact_button");
    button3.textContent = "contact"
    menu.appendChild(button1);
    menu.appendChild(button2);
    menu.appendChild(button3);
    content.appendChild(menu);
}

export { loadHeader }