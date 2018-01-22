var button = document.querySelector("button");
var header = document.querySelector("h1");

button.addEventListener("click",function(){
	header.textContent = "Someone Clicked the Button!";
	button.style.background = "green";
	header.style.color = "blue";
});