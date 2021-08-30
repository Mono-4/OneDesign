"use-strict";

const mai = document.querySelector(".main");
const mou = document.querySelector(".bf");

mou.addEventListener("mouseenter", (e) => {
	mai.classList.add("ani");
});

mou.addEventListener("mouseleave", (e) => {
	mai.classList.remove("ani");
});
