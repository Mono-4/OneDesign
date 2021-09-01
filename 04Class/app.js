"use-strict";

const keyimg = document.querySelector(".key-img__bg");
const popup = document.querySelector(".pop-up");
const popup__bg = document.querySelector(".pop-up__bg");
const popup__close = document.querySelector(".pop-up__close");
const classcard = document.querySelectorAll(".class-card");

const popup__title = document.querySelector(".pop-up__title");
const popup__text1 = document.querySelector(".pop-up__text:nth-of-type(1)");
const popup__text2 = document.querySelector(".pop-up__text:nth-of-type(2)");
const popup__text3 = document.querySelector(".pop-up__text:nth-of-type(3)");

let img_num = 0;
setInterval(() => {
	if (img_num === 0) {
		keyimg.classList.add("key-img__bg--anime");

		setTimeout(() => {
			keyimg.style.backgroundImage = 'url("./img/2.jpg")';
		}, 1000);
		setTimeout(() => {
			keyimg.classList.remove("key-img__bg--anime");
		}, 1500);
	} else if (img_num === 1) {
		keyimg.classList.add("key-img__bg--anime");
		setTimeout(() => {
			keyimg.style.backgroundImage = 'url("./img/3.png")';
		}, 1000);
		setTimeout(() => {
			keyimg.classList.remove("key-img__bg--anime");
		}, 1500);
	} else if (img_num === 2) {
		keyimg.classList.add("key-img__bg--anime");
		setTimeout(() => {
			keyimg.style.backgroundImage = 'url("./img/1.jpg")';
		}, 1000);
		setTimeout(() => {
			keyimg.classList.remove("key-img__bg--anime");
		}, 1500);
	}
	img_num++;
	if (img_num === 3) img_num = 0;
}, 5000);

const plan = [
	{
		content: "仮想と現実について細かく学びます。",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます。。",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます。。。",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
	{
		content: "仮想と現実について細かく学びます",
		material: '<a href="#"">スライド</a>',
		assignment: "課題p1-p4",
	},
];

// // ポップアップを表示
classcard.forEach((e, index) => {
	e.addEventListener("click", () => {
		popup.style.display = "block";
		popup__title.innerHTML = e.innerHTML;
		popup__text1.innerHTML = plan[index].content;
		popup__text2.innerHTML = plan[index].material;
		popup__text3.innerHTML = plan[index].assignment;
	});
});

// ポップアップを閉じる
popup__close.addEventListener("click", () => {
	popup.style.display = "none";
});

popup__bg.addEventListener("click", () => {
	popup.style.display = "none";
});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {
	//id名を指定
	easing: "easeInOut", //アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000, //時間指定(1000＝1秒)
	strokeWidth: 0.2, //進捗ゲージの太さ
	color: "#555", //進捗ゲージのカラー
	trailWidth: 0.2, //ゲージベースの線の太さ
	trailColor: "#bbb", //ゲージベースの線のカラー
	text: {
		//テキストの形状を直接指定
		style: {
			//天地中央に配置
			position: "absolute",
			left: "50%",
			top: "50%",
			padding: "0",
			margin: "-30px 0 0 0", //バーより上に配置
			transform: "translate(-50%,-50%)",
			"font-size": "1rem",
			color: "#fff",
		},
		autoStyleContainer: false, //自動付与のスタイルを切る
	},
	step: function (state, bar) {
		bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
	},
});
//アニメーションスタート
bar.animate(1.0, function () {
	//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
});

// タイトルをフェードイン
const h2 = document.querySelectorAll("h2");
let elementY = [];

window.addEventListener("scroll", () => {
	h2.forEach((e, index) => {
		elementY[index] = e.getBoundingClientRect();
	});
	elementY.forEach((e, index) => {
		console.log(e.top);

		if (e.top > 0 && e.top < window.innerHeight) {
			h2[index].classList.add("fadein");
		}
	});
});
