const ratings = document.querySelectorAll(".rating");
const feedback = document.querySelector(".feedback-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#feedback");

let selectedRating = "Okay";
let respondedRating = null;
let respondedIcon = "😺";

function removeActive() {
    for (let i = 0; i < ratings.length; i++)    {
        ratings[i].classList.remove("active");
    }
}

ratings.forEach(rating => {
    rating.addEventListener("click", function() {
        ratings.forEach(o => o.classList.remove("active"));
        this.classList.add("active");
        selectedRating = this.querySelector("p").textContent;
        respondedIcon = this.querySelector("div").textContent;
    });
});

sendBtn.addEventListener('click', (e) => {
    if (selectedRating == "Terrible")   {
        respondedRating = "I'm sorry to hear that. I'll do my best to fix or improve the situation."
    }
    if (selectedRating == "Bad")    {
        respondedRating = " I understand. I'll try my best to fix or improve things for you."
    }
    if (selectedRating == "Okay")   {
        respondedRating = "Noted. I'll make an effort to enhance your experience.";
    }
    if (selectedRating == "Good")   {
        respondedRating = "Great to hear! I'll keep up the good work and strive for even better."
    }
    if (selectedRating == "Amazing") {
        respondedRating = "That's fantastic! I'll continue to provide excellent service and support.";
    }
    panel.innerHTML = `
        <div class = "responded-icon">${respondedIcon}</div>
        <strong class="response">Thank You!</strong>
        <strong class="response2">Feedback: ${selectedRating}</strong>
        <div>${respondedRating}</div>
    `
})