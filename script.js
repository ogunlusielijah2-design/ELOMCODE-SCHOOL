/* =========================================================
   ELOMCODE SCHOOL
   CINEMATIC HOMEPAGE JAVASCRIPT
   Created by Elijah Opomulero
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {

        if (preloader) {
            preloader.classList.add("hide");
        }

    }, 1100);

});


/* ================= AMBIENT THEMES ================= */

const themes = {

    blue: {
        accent: "#3478ed",
        rgb: "52,120,237",
        page: "#eaf3ff",
        section: "#e1edff",
        one: "#5b9cff",
        two: "#88c8ff",
        three: "#a99aff"
    },

    purple: {
        accent: "#9865ed",
        rgb: "152,101,237",
        page: "#f1ecff",
        section: "#e9e0ff",
        one: "#9865ed",
        two: "#c39cff",
        three: "#6d7cff"
    },

    cyan: {
        accent: "#27b9d1",
        rgb: "39,185,209",
        page: "#e7fbff",
        section: "#dcf7fa",
        one: "#27c7dc",
        two: "#77dff0",
        three: "#79a9ff"
    },

    green: {
        accent: "#28a96b",
        rgb: "40,169,107",
        page: "#e9f8ef",
        section: "#dff4e8",
        one: "#38b879",
        two: "#7bd9a5",
        three: "#8ac9c2"
    },

    pink: {
        accent: "#df63a8",
        rgb: "223,99,168",
        page: "#fff0f8",
        section: "#ffe4f1",
        one: "#ef70b8",
        two: "#ffa4d2",
        three: "#a68aff"
    },

    gold: {
        accent: "#c99a24",
        rgb: "201,154,36",
        page: "#fff8e7",
        section: "#fff1ce",
        one: "#e0b23f",
        two: "#f5d77c",
        three: "#e99c65"
    },

    red: {
        accent: "#d94f60",
        rgb: "217,79,96",
        page: "#fff0f0",
        section: "#ffe4e4",
        one: "#e45d69",
        two: "#ff9d9d",
        three: "#b18bff"
    },

    orange: {
        accent: "#e77c2f",
        rgb: "231,124,47",
        page: "#fff4e9",
        section: "#ffead9",
        one: "#f18b3e",
        two: "#ffc17d",
        three: "#f4a4a4"
    },

    ice: {
        accent: "#54acd4",
        rgb: "84,172,212",
        page: "#eefaff",
        section: "#e1f5ff",
        one: "#73c9ed",
        two: "#a5e3fa",
        three: "#8daeff"
    },

    teal: {
        accent: "#159a98",
        rgb: "21,154,152",
        page: "#e7f7f6",
        section: "#d9efed",
        one: "#1aa6a4",
        two: "#75d0c7",
        three: "#7b9ee8"
    },

    lavender: {
        accent: "#9275d7",
        rgb: "146,117,215",
        page: "#f3efff",
        section: "#ebe4ff",
        one: "#a58be8",
        two: "#d1b6ff",
        three: "#86aaff"
    }

};


/* ================= APPLY THEME ================= */

const root = document.documentElement;

const themeButtons = document.querySelectorAll(".light-option");

const ambientPanel = document.getElementById("ambientPanel");

const ambientToggle = document.getElementById("ambientToggle");

const closeAmbient = document.getElementById("closeAmbient");


function setAmbientTheme(themeName) {

    const theme = themes[themeName];

    if (!theme) return;


    /* Change the complete background atmosphere */

    root.style.setProperty("--accent", theme.accent);

    root.style.setProperty("--accent-rgb", theme.rgb);

    root.style.setProperty("--page-bg", theme.page);

    root.style.setProperty("--section-bg", theme.section);

    root.style.setProperty("--ambient-one", theme.one);

    root.style.setProperty("--ambient-two", theme.two);

    root.style.setProperty("--ambient-three", theme.three);


    /* Save theme */

    localStorage.setItem("elomcode_ambient_theme", themeName);


    /* Update selected button */

    themeButtons.forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.theme === themeName
        );

    });

}


/* Restore saved theme */

const savedTheme = localStorage.getItem("elomcode_ambient_theme");

setAmbientTheme(
    savedTheme && themes[savedTheme] ? savedTheme : "blue"
);


/* Theme selection */

themeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        setAmbientTheme(button.dataset.theme);

    });

});


/* ================= AMBIENT PANEL ================= */

ambientToggle.addEventListener("click", function () {

    ambientPanel.classList.toggle("open");

});


closeAmbient.addEventListener("click", function () {

    ambientPanel.classList.remove("open");

});


document.addEventListener("click", function (event) {

    if (
        !ambientPanel.contains(event.target) &&
        !ambientToggle.contains(event.target)
    ) {

        ambientPanel.classList.remove("open");

    }

});


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");


menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".nav-link");


const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach(function (link) {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + currentId
                    );

                });

            }

        });

    },

    {
        threshold: 0.25
    }

);


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* ================= FLOATING PARTICLES ================= */

const particleField = document.getElementById("particleField");


function createParticles() {

    if (!particleField) return;

    particleField.innerHTML = "";

    const isMobile = window.innerWidth < 600;

    const particleCount = isMobile ? 18 : 40;


    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (12 + Math.random() * 18) + "s";

        particle.style.animationDelay =
            (-Math.random() * 25) + "s";

        const size = 2 + Math.random() * 4;

        particle.style.width = size + "px";

        particle.style.height = size + "px";

        particle.style.opacity = (0.15 + Math.random() * 0.35);

        particleField.appendChild(particle);

    }

}


createParticles();


/* Recalculate particle count when screen size changes */

let resizeTimer;


window.addEventListener("resize", function () {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(createParticles, 300);

});


/* ================= CORE CARD TILT ================= */

const coreCard = document.querySelector(".core-card");

const heroVisual = document.querySelector(".hero-visual");


if (
    coreCard &&
    heroVisual &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    heroVisual.addEventListener("mousemove", function (event) {

        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;

        const rotateX = ((centerY - y) / centerY) * 8;

        coreCard.style.animation = "none";

        coreCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    heroVisual.addEventListener("mouseleave", function () {

        coreCard.style.animation = "";

        coreCard.style.transform = "";

    });

}


/* ================= FOOTER YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        ambientPanel.classList.remove("open");

        navigation.classList.remove("open");

    }

});


/* ================= END ================= */

console.log(
    "ELOMCODE SCHOOL — CINEMATIC HOMEPAGE READY."
);

console.log(
    "Created by Elijah Opomulero."
);