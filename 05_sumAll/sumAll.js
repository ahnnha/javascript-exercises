function sumAll (Num1, Num2) {
	let finalSum = 0;
	if (typeof(Num1)!=="number" || typeof(Num2)!=="number"){
		finalSum = "ERROR"
		} else if (Num1 <0 || Num2<0) {
				finalSum = "ERROR"
		} else if (Num1<Num2) {
			for (let i = Num1; i <=Num2; i++) {
		// console.log(i);
			finalSum += i;
			}
		} else if (Num1>Num2) {
			for (let i= Num2; i<=Num1; i++) {
				finalSum += i;
			}
		} return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
