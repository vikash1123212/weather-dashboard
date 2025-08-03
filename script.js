async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "4d037a6bdda986bebeec0f715097cbd8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
      return;
    }

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;

  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherResult").innerHTML = `<p>Something went wrong.</p>`;
  }
}
