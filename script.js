let is24hours = localStorage.getItem("clockFormat") === "true";

const clockElement = document.getElementById("clock-display");
const btn = document.getElementById("toggle-button");

btn.addEventListener("click", () => {
    is24hours = !is24hours;

    localStorage.setItem("clockFormat", is24hours);

    updateClock();
})


function updateClock() {
    const now = new Date();

    const dateOptions = { weekday: 'long', month: 'short', day: '2-digit' };

    const dateString = now.toLocaleDateString('ind', dateOptions)
    document.getElementById("date-display").textContent = dateString;

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const format = (num) => (num < 10 ? "0" + num : num);
    let timeString = "";

    if (is24hours) {
        timeString = `${format(hours)}:${format(minutes)}:${format(seconds)}`
    } else {
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        timeString = `${format(hours)}:${format(minutes)}:${format(seconds)} ${amPm}`
    }

    // Inject it into the HTML
    clockElement.textContent = timeString;
}

// Run the function once immediately, then every second
setInterval(updateClock, 1000);
updateClock();