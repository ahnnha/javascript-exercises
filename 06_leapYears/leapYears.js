const leapYears = function (year) {
// check if year can be divided by 4 but not by 100
	if (year%400==0) {
		return true;
	}
	else if (year%4 == 0 && year%100 !==0) {
		return true;
	} else {
		return false;
	}
}
// Do not edit below this line
module.exports = leapYears;
