let preSubmitted = document.querySelector("#pre-submitted");
let submittedForm = document.querySelector(".submitted-form");
let spanEL = document.querySelector(".span");
let submitBtn = document.querySelector(".submit");
let value = document.querySelector(".value").value;
let scoreBtns = document.querySelector(".btn");

Array.from(scoreBtns).forEach((score) => {
  score.addEventListener("click", () => {
    value.value = spanEL.innerHTML;
  });
});

submitBtn.addEventListener("click", () => {
  preSubmitted.style.display = "none";
  submittedForm.style.display = "flex";
});