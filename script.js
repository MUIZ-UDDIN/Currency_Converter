let button = document.getElementById("btn");

let Screen = document.getElementById("screen");
let restBtn = document.getElementById("RestBtn");
let ConvertBtn = document.getElementById("CnBtn");
let From_rupi = document.getElementById("From-Rupi");
let To_dolar = document.getElementById("To-Dolar");
let Result = document.getElementById("Result");
let Value = "";
restBtn.addEventListener("click", function () {
  Screen.value = "";
  Result.textContent = "";
  From_rupi.value = "";
  To_dolar.value = "";
});
ConvertBtn.addEventListener("click", function () {
  if (From_rupi.value == "RUPEES" && To_dolar.value == "US") {
    let us = "230";
    Value = parseInt(Screen.value) / parseInt(us);
    Result.innerText = `${Value}$`;
  } else if (From_rupi.value == "US" && To_dolar.value == "RUPEES") {
    let us = "230";
    Value = parseInt(Screen.value) * parseInt(us);
    Result.innerText = `${Value}RUPEES`;
  } else {
    alert(
      "Please Enter from US to RUPEES or from RUPEES To US or Enter a value and make sure to Enter in Capital letters"
    );
    Result.innerText = "";
  }
});
