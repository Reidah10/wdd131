/*
const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
});

const episodeButtons = document.querySelectorAll(".episode-button");

episodeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const episodeCard = button.parentElement;
        episodeCard.classList.toggle("open");
    });
});
*/


const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");


function toggleMenu() {
    mainNav.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);


const episodeButtons = document.querySelectorAll(".episode-button");

function toggleEpisode(button) {
    const episodeCard = button.parentElement;
    episodeCard.classList.toggle("open");
}

episodeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        toggleEpisode(button);
    });
});


const newsletterForm = document.querySelector("#newsletter-form");
const emailInput = document.querySelector("#newsletter-email");
const newsletterMessage = document.querySelector("#newsletter-message");


function getSubscribers() {
    return JSON.parse(localStorage.getItem("newsletterSubscribers")) || [];
}


function saveSubscribers(subscribers) {
    localStorage.setItem("newsletterSubscribers", JSON.stringify(subscribers));
}


function handleNewsletterSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const subscribers = getSubscribers();


    const alreadySubscribed = subscribers.some((subscriber) => {
        return subscriber.email === email;
    });

    if (alreadySubscribed) {
        newsletterMessage.textContent =
            `You're already part of the Rebellion, ${email}!`;
        return;
    }


    const newSubscriber = {
        email: email,
        signupDate: new Date().toISOString()
    };


    subscribers.push(newSubscriber);
    saveSubscribers(subscribers);

    newsletterMessage.textContent =
        `Welcome to the Rebellion! You're signed up with ${email}.`;

    newsletterForm.reset();
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
}