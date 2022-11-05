//navbar//
let link = document.querySelector(".menu");
let meni = document.querySelector(".header ul");

link.addEventListener("click", (e) => {
  meni.classList.toggle("open");
});

//Galerija pocetna//

let pictures = document.querySelectorAll(".slider-images img");
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");

let imgNum = 0;

const moveRight = () => {
  displayNone();

  imgNum++;

  if (imgNum === pictures.length) {
    imgNum = 0;
  }

  pictures[imgNum].style.display = "block";
};

const moveLeft = () => {
  displayNone();

  imgNum--;

  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }

  pictures[imgNum].style.display = "block";
};

rightBtn.addEventListener("click", moveRight);

leftBtn.addEventListener("click", moveLeft);

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};
