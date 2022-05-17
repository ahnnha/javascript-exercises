const reverseString = function (str) {
	// create a storage for a new str
	let newStr = "";
	// loop through each letter fron a string backward. Then put the letter together.  
	for (let i =str.length-1; i=>0; i--) {
		newStr +=str[i];
	}
	return newStr;
	console.log (newStr);
}

// Do not edit below this line
module.exports = reverseString;
