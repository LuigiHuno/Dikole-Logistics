// MOBILE MENU
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// SCROLL ANIMATION
window.addEventListener("scroll", reveal);

function calculateQuote() {
    const service = parseInt(document.getElementById("service").value);
    const distance = parseInt(document.getElementById("distance").value) || 0;
    const urgency = parseInt(document.getElementById("urgency").value);

    const total = service + (distance * 5) + urgency;

    document.getElementById("price").innerText = "R" + total;
}
    });
}

// FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMsg").innerText = "✅ Booking request sent!";
});
