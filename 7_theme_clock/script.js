const modeToggle = document.querySelector(".mode");

const hour = document.querySelector(".hour"),
    minute = document.querySelector(".minute"),
    second = document.querySelector(".second");


const time = document.querySelector('.time'),
    date = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

modeToggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("light"))    {
        html.classList.remove("light");
        e.target.innerHTML = "Light Mode";
    }
    else {
        html.classList.add("light");
        e.target.innerHTML = "Dark Mode";
    }
});