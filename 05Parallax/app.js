"use-strict";

const box = document.querySelector(".box");
const b1 = document.querySelector(".box__content--1");
const b2 = document.querySelector(".box__content--2");
const b3 = document.querySelector(".box__content--3");
const b4 = document.querySelector(".box__content--4");
const speed = 2;
const move = () => {
	if (scrollY < innerHeight) {
		b3.style.bottom = -scrollY * speed + "px";
	}
	b1.style.left = -scrollY * speed + "px";
	b2.style.top = -scrollY * speed + "px";
	b4.style.right = -scrollY * speed + "px";
};
window.addEventListener("scroll", move);
