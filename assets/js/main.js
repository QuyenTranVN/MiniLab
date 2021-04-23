const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

// display mobile menu
const mobileMenu = () => {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
	body.classList.toggle("active");
};
const scrollMenu = () => {
	if (window.pageYOffset > 200) {
		navbar.classList.add("colored");
	} else {
		navbar.classList.remove("colored");
	}
};
menu.addEventListener("click", mobileMenu);
window.addEventListener("scroll", scrollMenu);

//  Show active menu when Scrolling
const highLightMenu = () => {
	const homeMenu = document.querySelector("#home-page");
	const aboutMenu = document.querySelector("#about-page");
	const projectMenu = document.querySelector("#project-page");
	const contactMenu = document.querySelector("#contact-page");
	const banner = document.querySelector("#banner").scrollHeight;
	const about = document.querySelector("#expert").scrollHeight + banner;
	const client = document.querySelector("#client").scrollHeight;
	const project = document.querySelector("#work").scrollHeight + about + client;
	const contact = document.querySelector("#marketing").scrollHeight + project;

	let scrollPos = window.pageYOffset;

	// adds "highLight" class to menu items
	if (window.innerWidth > 768 && scrollPos < banner) {
		aboutMenu.classList.remove("highlight");
		projectMenu.classList.remove("highlight");
		contactMenu.classList.remove("highlight");
		homeMenu.classList.add("highlight");
	} else if (window.innerWidth > 768 && scrollPos < about) {
		homeMenu.classList.remove("highlight");
		projectMenu.classList.remove("highlight");
		contactMenu.classList.remove("highlight");
		aboutMenu.classList.add("highlight");
	} else if (window.innerWidth > 768 && scrollPos < project) {
		aboutMenu.classList.remove("highlight");
		contactMenu.classList.remove("highlight");
		homeMenu.classList.remove("highlight");
		projectMenu.classList.add("highlight");
	} else if (window.innerWidth > 768 && scrollPos < contact) {
		projectMenu.classList.remove("highlight");
		homeMenu.classList.remove("highlight");
		aboutMenu.classList.remove("highlight");
		contactMenu.classList.add("highlight");
	}
};
window.addEventListener("scroll", highLightMenu);
window.addEventListener("click", highLightMenu);

// animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animation__banner", {
	duration: 0.6,
	x: -150,
	opacity: 0,
	stagger: 0.3,
});
gsap.from(".animation__expert", {
	scrollTrigger: ".animation__expert",
	duration: 1,
	y: -150,
	opacity: 0,
	stagger: 0.3,
});
gsap.from(".animation__work", {
	scrollTrigger: ".animation__work",
	duration: 1,
	x: -150,
	opacity: 0,
	stagger: 0.3,
});
gsap.from(".animation__client", {
	scrollTrigger: ".animation__client",
	duration: 0.6,
	y: -150,
	opacity: 0,
	stagger: 0.3,
});
gsap.from(".animation__marketing", {
	scrollTrigger: ".animation__marketing",
	duration: 1,
	y: -150,
	opacity: 0,
	stagger: 0.3,
});
