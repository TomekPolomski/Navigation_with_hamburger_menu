const links = [...document.querySelectorAll('.nav-link')];
const navText = ['About', 'Clients', 'Portfolio', 'Careers', 'Fun'];
const navImg = document.querySelector('.navbar-img');
const nav = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');

links.forEach((link, i) => {
	navText[i].split('').forEach((letter, j) => {
		const span = document.createElement('span');
		span.textContent = letter;
		span.style.cssText = `--i: .${j}s`;
		link.append(span);
	});

	link.addEventListener('mouseenter', () => {
		navImg.style.transform = `translate(${link.dataset.position}%, -50%) rotate(${link.dataset.position * 8}deg)`;
	});
});

hamburgerMenu.addEventListener('click', () => {
	nav.classList.toggle('active');
	hamburgerMenu.classList.toggle('active');
});
