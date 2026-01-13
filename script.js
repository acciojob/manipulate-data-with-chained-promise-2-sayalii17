//your JS code here. If required.
let op= document.getElementById("output");

let arr= [1,2,3,4];

new Promise((resolve) => {
	setTimeout(() => {
		resolve(arr);
	}, 3000);
})
.then((data) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const evens= data.filter((num) => {num % 2 == 0});
			op.innerHTML= even.join(",");
			resolve(evens);
		}, 1000);
	});
})
.then((evens) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const double= evens.map((num) => {num*2});
			op.innerHTML= double.join(",");
			resolve(double);
		}, 2000);
	});
});