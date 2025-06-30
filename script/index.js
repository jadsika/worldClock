function updateTime() {
  let accraElement = document.querySelector("#accra");
  let accraDateElement = accraElement.querySelector(".date");
  let accraTimeElement = accraElement.querySelector(".time");
  let accraTime = moment().tz("Africa/Accra");

  accraTimeElement.innerHTML = accraTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  accraDateElement.innerHTML = accraTime.format("Do MMMM, YYYY");

  //Seoul

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  seoulDateElement.innerHTML = seoulTime.format("Do MMMM, YYYY");

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/sydney");

  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>] A[</small>]"
  );

  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM, YYYY");
}
updateTime();
setInterval(updateTime, 1000);
