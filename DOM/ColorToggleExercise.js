var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

function colorChange(){
	if(isPurple){
		body.style.background = "white";
	}
	else{
		button.style.background = "yellow";
		button.style.color = "black";
		body.style.background = "purple";
	}
	isPurple = !isPurple;
}

button.addEventListener("click",colorChange);