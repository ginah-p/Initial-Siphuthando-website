
// =================================
// SIPHUTHANDO HBC
// Main JavaScript
// =================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
