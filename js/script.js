const card = document.querySelector(".container");
const small_card = document.querySelector(".success");
const emailInput = document.getElementById("email");
const emailDisp = document.querySelector(".email");
const errorTxt = document.querySelector(".err-txt");
const submitBtn = document.getElementById("submit");
const dismissBtn = document.querySelector(".dismiss-btn");

submitBtn.addEventListener("click", submit);
dismissBtn.addEventListener("click", newPage);

function submit(e) {
  e.preventDefault();
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validEmail.test(emailInput.value) === true) {
    card.classList.add("hide");
    small_card.classList.remove("hide");
    emailDisp.innerText = emailInput.value;
  } else {
    errorTxt.style.display = "block";
    emailInput.value = "";
  }
}

function newPage() {
  emailInput.value = "";
  errorTxt.style.display = "none";
  small_card.classList.add("hide");
  card.classList.remove("hide");
}
