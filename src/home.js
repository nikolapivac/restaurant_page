const loadHome = () => {
    const content = document.querySelector("#content");

    // container
    const container = document.createElement("div");
    container.classList.add("container");
        // image
    const image = document.createElement("img");
    image.setAttribute("src", "./images/banner.jpg");
    container.appendChild(image);
        // subcontainer
    const subcontainer = document.createElement("div");
    subcontainer.classList.add("sub_container");
            // testimony
    const testimony = document.createElement("div");
    testimony.classList.add("testimony");
                //text
    const testimonyText = document.createElement("p");
    testimonyText.textContent = "Food Island has some of the best food I've ever tried. Customer service is amazing and they make you feel like home! We even had a beautiful view at the sea. We will come back here!"
    testimony.appendChild(testimonyText);
                //signature
    const signature = document.createElement("h4");
    signature.textContent = "- Tony";
    testimony.appendChild(signature);
    subcontainer.appendChild(testimony);
            // hours
    const hours = document.createElement("div");
    hours.classList.add("hours");
                //hours title
    const hrsTitle = document.createElement("h3");
    hrsTitle.textContent = "Hours";
    hours.appendChild(hrsTitle);
                //mon-fri
    const monfri = document.createElement("p");
    monfri.textContent = "Mon - Fri: 6am - 10pm"
    hours.appendChild(monfri);
                //satsun
    const satsun = document.createElement("p");
    satsun.textContent = "Sat & Sun: 7am - 11pm"
    hours.appendChild(satsun);
    subcontainer.appendChild(hours);
            // location
    const location = document.createElement("div");
    location.classList.add("location");
                //location title
    const locTitle = document.createElement("h3");
    locTitle.textContent = "Location"
    location.appendChild(locTitle);
                //location text
    const locText = document.createElement("h4");
    locText.textContent = "123 Island Drive, Savaneta, Aruba"
    location.appendChild(locText);
    subcontainer.appendChild(location);

    container.appendChild(subcontainer);
    content.appendChild(container);
};

export { loadHome };