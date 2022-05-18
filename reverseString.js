const reverseString = function (str) {
	let newString = "";
	for (let i=str.length-1;i>=0;i--) {
		newString +=str[i];
	}
	return newString;
}

const reverseMultipleWords = function (str) {
	// create an empty variable for new string
	let newString = "";
	// get rid of spaces
	str=str.replace(/\s+/g,"");
	// console.log (str);
	// loop through the string from backward
	for (let i = str.length-1;i>=0;i--) {
		newString += str[i];
	}	
return newString;
}
// Do not edit below this line
module.exports = reverseString;
