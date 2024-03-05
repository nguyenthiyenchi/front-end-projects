const modeToggle = document.querySelector(".mode");

const hour = document.querySelector(".hour"),
    minute = document.querySelector(".minute"),
    second = document.querySelector(".second");

const time = document.querySelector(".time"),
    date = document.querySelector(".date");

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

// scale to make the hands to run
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function setTimer() {
    const time = new Date();

    const month = time.getMonth(),
        day = time.getDay(),
        date = time.getDate();

    const hours = time.getHours(),
        hoursClock = hours >= 13 ? hours % 12 : hours,
        minutesClock = time.getMinutes(),
        secondsClock = time.getSeconds();
    
    const ampm = hours >= 12 ? "PM" : "AM";

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursClock, 0, 12, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutesClock, 0, 60, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(secondsClock, 0, 60, 0, 360)}deg)`;

    time.innerHTML = `${hoursClock}:${minutesClock < 10 ? `0${minutesClock}` : minutesClock} ${ampm}`;
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTimer();

setInterval(setTimer, 1000);