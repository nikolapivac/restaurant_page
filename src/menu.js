const loadMenu = () => {

    function createItem(src, title, price){
        const item = document.createElement("div");
        item.classList.add("item");

        const image = document.createElement("img");
        image.setAttribute("src", `${src}`);
        item.appendChild(image);
            
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = `${title}`;
        item.appendChild(itemTitle);
            
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `${price}`;
        item.appendChild(itemPrice);

        return item;
    }

    const content = document.getElementById("content");

    // menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu_container");
        // title
    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu_title");
    menuTitle.textContent = "menu";
    menuContainer.appendChild(menuTitle);

        // beverages container
    const bevContainer = document.createElement("div");
    bevContainer.classList.add("bev_container");
            // beverages title
    const bevTitle = document.createElement("h2");
    bevTitle.textContent = "beverages";
    bevContainer.appendChild(bevTitle);
            // beverages list
    const bev1 = createItem("../dist/images/lemonmezcal.jpg", "Lemon Mezcal Margarita", "$7");
    bevContainer.appendChild(bev1);
    const bev2 = createItem("../dist/images/caipirinha.jpg", "Caipirinha", "$8");
    bevContainer.appendChild(bev2);
    const bev3 = createItem("../dist/images/mojito.jpg", "Mojito", "$8");
    bevContainer.appendChild(bev3);

        // side dishes container
    const sideContainer = document.createElement("div");
    sideContainer.classList.add("side_container");
            // side dishes title
    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "side dishes";
    sideContainer.appendChild(sidesTitle);
            // side dishes list
    const side1 = createItem("../dist/images/greek.jpg", "Greek Salad", "$10");
    sideContainer.appendChild(side1);
    const side2 = createItem("../dist/images/ceasar.webp", "Ceasar Salad", "$11");
    sideContainer.appendChild(side2);

        // main dishes container
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main_container");  
            // side dishes title
    const mainTitle = document.createElement("h2");
    mainTitle.textContent = "main dishes";
    mainContainer.appendChild(mainTitle);
        // side dishes list
    const main1 = createItem("../dist/images/coconut.jpg", "Coconut Mango Beef Curry", "$23");
    mainContainer.appendChild(main1);
    const main2 = createItem("../dist/images/kalua.jpg", "Kalua Pork", "$22");
    mainContainer.appendChild(main2);
    const main3 = createItem("../dist/images/carribean.jpg", "Carribean Shrimp Bowl", "$19");
    mainContainer.appendChild(main3);
    const main4 = createItem("../dist/images/jicama.jpg", "Jicama Pineapple Guacamole", "$29");
    mainContainer.appendChild(main4);


    menuContainer.appendChild(bevContainer);
    menuContainer.appendChild(sideContainer);
    menuContainer.appendChild(mainContainer);
    content.appendChild(menuContainer);
}

export { loadMenu }