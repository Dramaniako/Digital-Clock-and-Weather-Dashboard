const API_KEY = "f7d5081fb31795ffaa809eef7d898880";
const CITY = "Badung";

async function updateWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("Weather data not found");

        const data = await response.json();

        document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById("desc").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById("weather-display").textContent = "Weather unavailable";

    }
}

updateWeather();
setInterval(updateWeather, 1800000);