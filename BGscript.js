var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var option = document.querySelector(".option")

console.log(color1);
console.log(color2);
console.log(body);
console.log(option);

color1.addEventListener("input", function() {
	if (option.value === "angular") {
		body.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "right") {
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "top") {
		body.style.background = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "radial") {
		body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
	}
	css.textContent = body.style.background;
})

color2.addEventListener("input", function() {
	if (option.value === "angular") {
		body.style.background = "linear-gradient(45deg, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "right") {
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "top") {
		body.style.background = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
	} else if (option.value === "radial") {
		body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
	}
	css.textContent = body.style.background;
})