const loadContacts = () => {
    const createContactCard = (name, role, num, email) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardName = document.createElement("h1");
        cardName.textContent = `${name}`;
        card.appendChild(cardName);

        const cardRole = document.createElement("p");
        cardRole.textContent = `${role}`;
        card.appendChild(cardRole);

        const cardNum = document.createElement("p");
        cardNum.textContent = `${num}`;
        card.appendChild(cardNum);

        const cardEmail = document.createElement("h4");
        cardEmail.textContent = `${email}`;
        card.appendChild(cardEmail);

        return card;
    }

    const content = document.getElementById("content");

    // card container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact_container");
        // title
    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("contact_title");
    contactTitle.textContent = "contact us";
    contactContainer.appendChild(contactTitle);

        // card container
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card_container");
            // cards
    const card1 = createContactCard("Marco", "Manager", "555-555-5551", "marco@foodisland.com");
    cardContainer.appendChild(card1);
    const card2 = createContactCard("Julia", "Chef", "555-555-5552", "colbert.julia@foodisland.com");
    cardContainer.appendChild(card2);
    const card3 = createContactCard("Rudy", "Waitress", "555-555-5553", "rudy00@foodisland.com");
    cardContainer.appendChild(card3);
    const card4 = createContactCard("Laurence", "Waiter", "555-555-5554", "laurence.winston@foodisland.com");
    cardContainer.appendChild(card4);
    const card5 = createContactCard("Cindy", "Hostess", "555-555-5555", "cindy09@foodisland.com");
    cardContainer.appendChild(card5);

    contactContainer.appendChild(cardContainer);
    content.appendChild(contactContainer);
}

export { loadContacts }