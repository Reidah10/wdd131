
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Deseret Peak Utah",
    location: "Tooele, Utah",
    dedicated: "2024, November, 10",
    area: 71998,
    imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Deseret_Peak_Utah_Temple_outside_-_2024.jpg/330px-Deseret_Peak_Utah_Temple_outside_-_2024.jpg?"
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mount_Timpanogos_Utah_Temple_1.jpg?"
  },
  {
    templeName: "Orem Utah",
    location: "Orem, Utah",
    dedicated: "2024, January, 21",
    area: 71998,
    imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Orem_Utah_Temple_Picture_from_Open_House.jpg/330px-Orem_Utah_Temple_Picture_from_Open_House.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
  }
];

function createTempleCard(temples) {
    document.querySelector(".temple-grid").innerHTML = "";

    temples.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        
        let dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        document.querySelector(".temple-grid").appendChild(card);
    });
}

const oldTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year < 1900;
});
const newTemples = temples.filter(temple => {
    const year = Number(temple.dedicated.split(",")[0]);
    return year > 2000;
});
const largeTemples = temples.filter(temple => {
    const area = temple.area;
    return area > 90000;
});
const smallTemples = temples.filter(temple => {
    const area = temple.area;
    return area < 10000;
});

const heading = document.querySelector("h1");
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (link.textContent === "Home") {
            createTempleCard(temples);
            heading.textContent = "Home";
        }
        else if (link.textContent === "Old") {
            createTempleCard(oldTemples);
            heading.textContent = "Old";
        }
        else if (link.textContent === "New") {
            createTempleCard(newTemples);
            heading.textContent = "New";
        }
        else if (link.textContent === "Large") {
            createTempleCard(largeTemples);
            heading.textContent = "Large";
        }
        else if (link.textContent === "Small") {
            createTempleCard(smallTemples);
            heading.textContent = "Small";
        }
    });
});


createTempleCard(temples);

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
