const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const temperature = 50;
const windSpeed = 10;
const conditions = "Partly Cloudy";

document.querySelector("#temp-value").textContent = `${temperature}°F`;
document.querySelector("#conditions-value").textContent = conditions;
document.querySelector("#wind-value").textContent = `${windSpeed} mph`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);
document.querySelector("#windchill-value").textContent = windChill === "N/A" ? windChill : `${windChill.toFixed(0)}°F`;