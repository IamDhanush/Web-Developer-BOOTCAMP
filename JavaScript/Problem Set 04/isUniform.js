var arr = [1,1,1,1];
var arr2 = [1,1,2,1];
var arr3 = ['a','a','a','a'];
function isUniform(a){
	var first = a[0];
	for(var i=1;i<a.length;i++){
		if(a[i] !== first){
			return false;
		}
	}
			return true;
		}
console.log(isUniform(arr));
console.log(isUniform(arr2));
console.log(isUniform(arr3));