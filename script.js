//navbar//

const mobileMenu = () => {
	let btn = document.querySelector('.header button');
	let meni = document.querySelector('.header ul');

	if(btn.innerText === 'MENU') {
		meni.style.display = 'block';
		btn.innerText = 'CLOSE';
   }else{
        meni.style.display = 'none';
        btn.innerText = 'MENU';   
		}
}

//Galerija pocetna//

let pictures = document.querySelectorAll('.slider-images img');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');

let imgNum = 0;

const moveRight = () => {
	displayNone();

	imgNum++;

	if(imgNum === pictures.length) {
		imgNum = 0;
	}

	pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
	displayNone();

	imgNum--;

	if(imgNum === -1) {
		imgNum = pictures.length - 1;
	}

	pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

const displayNone = () => {
	pictures.forEach((img) => {
		img.style.display = 'none';
	})
}