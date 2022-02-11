function onGeoOk(postition) {
  const lat = postition.coords.latitude;
  const lon = postition.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = `@${data.name}`;
      if (API_KEY === undefined) {
        weather.innerText = "Your API KEY is hiding somewhere!";
      }
    });
}
function onGeoError() {
  alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
