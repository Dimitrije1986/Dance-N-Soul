//navbar//
let link = document.querySelector(".menu");
let meni = document.querySelector(".header ul");

link.addEventListener("click", (e) => {
  meni.classList.toggle("open");
});

//************ form ********** //

const btn = document.querySelector("form button");
const filds = document.querySelectorAll(".form-message");

btn.addEventListener("click", () => {
  filds.forEach((element) => {
    element.value = "";
  });
});
