//navbar//
let link = document.querySelector(".menu");
let meni = document.querySelector(".header ul");

link.addEventListener("click", (e) => {
  meni.classList.toggle("open");
});

//************ form ********** //

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
