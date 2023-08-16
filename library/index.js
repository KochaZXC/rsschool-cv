console.log('80');

let burgerMenuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-nav-list');
burgerMenuBtn.addEventListener('click', function(){
	burgerMenuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})