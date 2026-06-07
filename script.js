// Explore Features Button
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.getElementById("features").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Contact Form
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        form.reset();
    });
}

// Current Year Auto Update
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("TravelMate Website Loaded Successfully 🚀");