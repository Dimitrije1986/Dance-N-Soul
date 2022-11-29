'use strict';

//navbar//
let link = document.querySelector('.menu');
let meni = document.querySelector('.header ul');

link.addEventListener('click', e => {
  meni.classList.toggle('open');
});

//************ form ********** //

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

//**********  popup-modal *********//

const btnMirna = document.querySelector('.button-mirna');
const btnSanja = document.querySelector('.button-sanja');
const popupMirna = document.querySelector('.mirna');
const popupSanja = document.querySelector('.sanja');

const overlay = document.querySelector('.add');
const closeBtns = document.querySelectorAll('.close-modal');

const openModal = () => {
  if (event.target.id === 'mirna') {
    popupMirna.classList.remove('hidden');
  }
  if (event.target.id === 'sanja') {
    popupSanja.classList.remove('hidden');
  }
  overlay.classList.add('overlay');
};

const closeModal = () => {
  popupMirna.classList.add('hidden');
  popupSanja.classList.add('hidden');
  overlay.classList.remove('overlay');
};

btnMirna.addEventListener('click', openModal);
btnSanja.addEventListener('click', openModal);

for (let i = 0; i < closeBtns.length; i++)
  closeBtns[i].addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
