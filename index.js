function updateTime() {
  let atlantaElement = document.querySelector("#atlanta");
  let atlantaDateElement = atlantaElement.querySelector(".date");
  let atlantaTimeElement = atlantaElement.querySelector(".time");

  let atlantaTime = moment().tz("America / Atlanta");

  atlantaDateElement.innerHTML = atlantaTime.format("MMMM Do YYYY");
  atlantaTimeElement.innerHTML = atlantaTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");
}
updateTime();
setInterval(updateTime, 1000);
