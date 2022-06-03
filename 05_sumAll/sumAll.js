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
// function sumAll (num1, num2) {
// 	let finalSum = 0;
// 	let Num1 = Number(num1);
// 	let Num2 = Number(num2);
// 	if (Num1<Num2) {
// 			for (let i = Num1; i <=Num2; i++) {
// 		// console.log(i);
// 			finalSum += i;
// 			}
// 		} else if (Num1>Num2) {
// 			for (let i= Num2; i<=Num1; i++) {
// 				finalSum += i;
// 			}
// 		} else {
// 				finalSum = "ERROR"
// 			} return finalSum;
// 		}
// Your issue likely is where you declare 'finalSum'. Notice that if you run it multiple times it will keep adding and adding. 

// Do not edit below this line
module.exports = sumAll;
