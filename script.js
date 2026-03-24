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

// QUOTE CALCULATOR
function calculateQuote() {
    const service = parseInt(document.getElementById("service").value) || 0;
    const distance = parseInt(document.getElementById("distance").value) || 0;
    const urgency = parseInt(document.getElementById("urgency").value) || 0;

    const total = service + distance * 5 + urgency;

    document.getElementById("price").innerText = "R" + total;
}

// UPDATE QUOTE IN REAL TIME
document.querySelectorAll("#service, #distance, #urgency")
    .forEach(el => el.addEventListener("input", calculateQuote));

// FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMsg").innerText = "✅ Booking request sent!";
});
