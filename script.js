function fibonacci(num) {
// your code here
	// if(num==1){
	// 	return 0;
	// }
	// if(num==2){
	// 	return 1;
	// }
	// return fibonacci(num-1)+fibonacci(num-2);

	let a = 0;let b=1;
	let c=0;
	let ans =0;
	for(let i=0;i<num;i++){
		ans=a;
		c=a+b;
		b=c;
		a=b;
	}
	return ans;
	
}

module.exports = fibonacci;
