/*Print all numbers divisible by 5 AND 3 between 5 and 50*/
var count =5;
while(count<=50){
	if (count%5==0 && count%3==0) {
		console.log(count);
	}
	count++;
}