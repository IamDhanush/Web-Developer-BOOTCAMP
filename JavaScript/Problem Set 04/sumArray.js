var arr = [1,3,5,7,9,11,13];
function sumArray(a){
	var count=0;
	for(var i=0;i<a.length;i++){
		count += a[i];
	}
	return count;
}
console.log(sumArray(arr));