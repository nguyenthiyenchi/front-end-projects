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
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
    else {
        html.classList.add("light");
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    }
});

function setTimer() {
    const time = new Date();

    const month = time.getMonth(),
        day = time.getDay(),
        date = time.getDate();

    const hours = time.getHours(),
        hoursClock = hours >= 13 ? hours % 12 : hours,
        minutes = time.getMinutes(),
        second = time.getSeconds;
    
    const ampm = hours >= 12 ? "PM" : "AM";

}