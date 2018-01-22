var arr = [1,2,3,4];
var arr2 = [2,4,6,8];
function printReverse(a){
	for(var i=(a.length)-1;i>=0;i--){
		console.log(a[i]);
	}
}
printReverse(arr);
console.log("-------------");
printReverse(arr2);