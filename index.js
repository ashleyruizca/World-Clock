function updateTime() {
  let atlantaElement = document.querySelector("#atlanta");
  if (atlantaElement) {
    let atlantaDateElement = atlantaElement.querySelector(".date");
    let atlantaTimeElement = atlantaElement.querySelector(".time");
    let atlantaTime = moment().tz("America/Atlanta");

    atlantaDateElement.innerHTML = atlantaTime.format("MMMM	Do YYYY");
    atlantaTimeElement.innerHTML = atlantaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("MMMM	Do YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let southPoleElement = document.querySelector("#south-pole");
  if (southPoleElement) {
    let southPoleDateElement = southPoleElement.querySelector(".date");
    let southPoleTimeElement = southPoleElement.querySelector(".time");
    let southPoleTime = moment().tz("Antarctica/South_Pole");

    southPoleDateElement.innerHTML = southPoleTime.format("MMMM	Do YYYY");
    southPoleTimeElement.innerHTML = southPoleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
