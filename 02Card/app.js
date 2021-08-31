"use-strict";
let element;
let card = document.querySelector(".card");
let w = window.innerWidth;
let h = window.innerHeight;
let i, j;

for (i = 0; i < Math.floor(h / 150); i++) {
	for (j = 0; j < Math.floor(w / 100); j++) {
		if (i === 0 && j === 0) {
			j++;
		}
		element = card.cloneNode(true);

		document.body.appendChild(element);
	}
}
let cards = document.querySelectorAll(".card__main");

cards.forEach((value) => {
	value.addEventListener("mouseenter", () => {
		value.classList.add("card__main--anime");
		setTimeout(() => {
			value.classList.remove("card__main--anime");
		}, 1000);
	});
});
// let card__main = document.querySelectorAll(".card__main");
// card__main.forEach((value) => {
// 	value.innerHTML = "";
// });
