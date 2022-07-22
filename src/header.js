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
    button1.classList.add("menu_item1");
    button1.textContent = "home";
    const button2 = document.createElement("button");
    button1.classList.add("menu_item2");
    button2.textContent = "menu"
    const button3 = document.createElement("button");
    button1.classList.add("menu_item3");
    button3.textContent = "contact"
    menu.appendChild(button1);
    menu.appendChild(button2);
    menu.appendChild(button3);
    content.appendChild(menu);
}

export { loadHeader }