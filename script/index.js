function updateTime() {
  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");
  let accraDayNightElement = accraElement.querySelector(".day-night");
  let accraTime = moment().tz("Africa/Accra");

  accraTimeElement.innerHTML = accraTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  accraDateElement.innerHTML = accraTime.format("Do MMMM, YYYY");
  let accraHour = accraTime.hour();
  accraDayNightElement.innerHTML =
    accraHour >= 6 && accraHour < 18 ? "DAY" : "NIGHT";

  //Seoul

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  seoulDateElement.innerHTML = seoulTime.format("Do MMMM, YYYY");
  let seoulDayNightElement = seoulElement.querySelector(".day-night");
  let seoulHour = seoulTime.hour();
  seoulDayNightElement.innerHTML =
    seoulHour >= 6 && seoulHour < 18 ? "DAY" : "NIGHT";

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/sydney");

  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM, YYYY");
  let sydneyDayNightElement = sydneyElement.querySelector(".day-night");
  let sydneyHour = sydneyTime.hour();
  sydneyDayNightElement.innerHTML =
    sydneyHour >= 6 && sydneyHour < 18 ? "DAY" : "NIGHT";
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let cityHour = cityTime.hour();
  let dayNight = cityHour >= 6 && cityHour < 18 ? "DAY" : "NIGHT";

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div class="city-card">
      <div class="city-info">
        <div class="city-details">
          <div class="city-name">${cityName}</div>
          <div class="timezone">${cityTimeZone}</div>
        </div>
      </div>
      <div class="time-section">
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
        <div class="date">${cityTime.format("Do MMMM, YYYY")}</div>
      </div>
      <div class="day-night">${dayNight}</div>

    </div>
  </div>
  <a href="/">Back to World Clock</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
