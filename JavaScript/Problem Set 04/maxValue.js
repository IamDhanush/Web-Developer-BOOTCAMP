var arr= [1,3,6,13,9,10];
function maxValue(array){
	var maxvalue=0;
	for(var i=0;i<array.length;i++){
		if(array[i]>maxvalue){
			maxvalue = array[i];
		}
}	
console.log("Maximum value in the array is: "+maxvalue);
}
maxValue(arr);
