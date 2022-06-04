// Fehrenheit to Celsius: subtract 32 and multiply by . 5556
const ftoc = function(temF) {
  let resultInCel = (temF-32) * 0.5556;
//  then round to one decimal using toFixed
  let roundResult = resultInCel.toFixed(1);
  return Number(roundResult);
}

// console.log (ftoc(-100));
// console.log(typeof(ftoc(-100)));

// ctof(0) // celsius to fahrenheit, should return 32
const ctof = function (temC) {
  let resultInFeh = temC * 1.8 +32;
  //  then round to one decimal using toFixed
  let roundResult = resultInFeh.toFixed(1);
  return Number(roundResult);
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
