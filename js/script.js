var button = document.querySelector(".appointment-button");
var form = document.querySelector(".appointment-form ");
var inputDate = document.querySelector(".input-date");
var inputDeparture = document.querySelector("[name=name-departure-date]");
var inputArrival = document.querySelector("[name=name-arrival-date]");

form.classList.remove ("appointment-form-show");

button.addEventListener("click", function(evt) {
  form.classList.remove("appointment-form-error");
  evt.preventDefault(); 
  form.classList.toggle("appointment-form-show");
  inputDate.focus();
});

form.addEventListener("submit", function (evt) {
  form.classList.remove("appointment-form-error");
  form.offsetWidth = form.offsetWidth;
  if (!inputDeparture.value || !inputArrival.value) {
    evt.preventDefault();
    form.classList.add("appointment-form-error");
  }
}); 