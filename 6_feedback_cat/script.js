const ratings = document.querySelectorAll(".rating");
const feedback = document.querySelector(".feedback-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#feedback");

let selectedRating = null;

function removeActive() {
    for (let i = 0; i < ratings.length; i++)    {
        ratings[i].classList.remove("active");
    }
}

// feedback.addEventListener("click", (e) => {
//     if (e.target.parentNode.classList.contains("rating") && e.target.nextElementSibling)
// })

document.addEventListener("DOMContentLoaded", function() {
    
    ratings.forEach(rating => {
        rating.addEventListener("click", function() {
            ratings.forEach(o => o.classList.remove("active"));
            this.classList.add("active");
        });
    });
});