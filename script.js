// MOBILE MENU
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// SCROLL ANIMATION
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMsg").innerText = "✅ Booking request sent!";
});
