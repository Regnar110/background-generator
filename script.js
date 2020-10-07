var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradient = document.getElementById("randomGenerate");

// Wybranie wartości domyślnej pola input( domyślnego koloru) i ustawienie tych wartości jako domyslne
var inputDefVal1 = document.getElementById("col1").value;
var inputDefVal2 = document.getElementById("col2").value;
body.style.background = "linear-gradient(to right," + inputDefVal1 + ", " + inputDefVal2 + ")";
// wyśiwetlenie startowych wartości <input>
css.textContent = body.style.background;

function changeGradient() {
		body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
		css.textContent = body.style.background;
}

function generateRandomGradient() {
	var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right," + randomColor2 + ", " + randomColor1 + ")";
	css.textContent = body.style.background;
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
randomGradient.addEventListener("click", generateRandomGradient);