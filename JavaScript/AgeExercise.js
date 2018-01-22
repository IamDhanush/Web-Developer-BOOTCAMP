var age = prompt("Please Enter your age to Proceed.");
if (age<=0) {
	console.log("Invalid Age Input");
}
else if(age==21){
	console.log("Happy 21st Birthday!!");
}
else if((age/Math.sqrt(age))==Math.sqrt(age)){
	console.log("Perfect Square");
}
else if((age%2)!==0){
	console.log("Your Age is an Odd Number.");
}
else{
	alert("Thanks!! You're "+age+" Years Old.");
}