// --- Mobile Menu (Hamburger) Logic ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// When the hamburger icon is clicked, toggle the 'active' class
// on both the icon and the menu. The CSS handles the animation.
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// --- Back to Top Button Logic ---
const backToTopButton = document.querySelector(".back-to-top");

// Listen for the scroll event on the window
window.addEventListener("scroll", () => {
    // If the user has scrolled more than 300 pixels down the page
    if (window.scrollY > 300) {
        // Add the 'visible' class to make the button appear
        backToTopButton.classList.add("visible");
    } else {
        // Otherwise, remove the 'visible' class to hide it
        backToTopButton.classList.remove("visible");
    }
});
