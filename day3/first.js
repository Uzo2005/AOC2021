const data = require('./data')


const arrFromData = data.split("\n");
var totalOfIndex0 = 0;
var totalOfIndex1 = 0;
var totalOfIndex2 = 0;
var totalOfIndex3 = 0;
var totalOfIndex4 = 0;
var totalOfIndex5 = 0;
var totalOfIndex6 = 0;
var totalOfIndex7 = 0;
var totalOfIndex8 = 0;
var totalOfIndex9 = 0;
var totalOfIndex10 = 0;
var totalOfIndex11 = 0;
const numberOfDataElements = arrFromData.length
const cutOffMark = numberOfDataElements/2;


for (i=0; i < arrFromData.length; i++){
    let arrFromEachDataEntry = [...arrFromData[i]]
    var totalOfIndex0 = totalOfIndex0 +  parseInt(arrFromEachDataEntry[0])
    var totalOfIndex1 = totalOfIndex1 + parseInt(arrFromEachDataEntry[1]);
    var totalOfIndex2 = totalOfIndex2 + parseInt(arrFromEachDataEntry[2]);
    var totalOfIndex3 = totalOfIndex3 + parseInt(arrFromEachDataEntry[3]);
    var totalOfIndex4 = totalOfIndex4 + parseInt(arrFromEachDataEntry[4]);
    var totalOfIndex5 = totalOfIndex5 + parseInt(arrFromEachDataEntry[5]);
    var totalOfIndex6 = totalOfIndex6 + parseInt(arrFromEachDataEntry[6]);
    var totalOfIndex7 = totalOfIndex7 + parseInt(arrFromEachDataEntry[7]);
    var totalOfIndex8 = totalOfIndex8 + parseInt(arrFromEachDataEntry[8]);
    var totalOfIndex9 = totalOfIndex9 + parseInt(arrFromEachDataEntry[9]);
    var totalOfIndex10 = totalOfIndex10 + parseInt(arrFromEachDataEntry[10]);
    var totalOfIndex11 = totalOfIndex11 + parseInt(arrFromEachDataEntry[11]);
}

if (totalOfIndex0 > cutOffMark) {
    var gammaIndex0 = 1
    var epsilonIndex0 = 0
}else{
    var gammaIndex0 = 0
    var epsilonIndex0 = 1
}
if (totalOfIndex1 > cutOffMark) {
  var gammaIndex1 = 1;
  var epsilonIndex1 = 0;
} else {
  var gammaIndex1 = 0;
  var epsilonIndex1 = 1;
}
if (totalOfIndex2 > cutOffMark) {
  var gammaIndex2 = 1;
  var epsilonIndex2 = 0;
} else {
  var gammaIndex2 = 0;
  var epsilonIndex2 = 1;
}
if (totalOfIndex3 > cutOffMark) {
  var gammaIndex3 = 1;
  var epsilonIndex3 = 0;
} else {
  var gammaIndex3 = 0;
  var epsilonIndex3 = 1;
}
if (totalOfIndex4 > cutOffMark) {
  var gammaIndex4 = 1;
  var epsilonIndex4 = 0;
} else {
  var gammaIndex4 = 0;
  var epsilonIndex4 = 1;
}
if (totalOfIndex5 > cutOffMark) {
  var gammaIndex5 = 1;
  var epsilonIndex5 = 0;
} else {
  var gammaIndex5 = 0;
  var epsilonIndex5 = 1;
}
if (totalOfIndex6 > cutOffMark) {
  var gammaIndex6 = 1;
  var epsilonIndex6 = 0;
} else {
  var gammaIndex6 = 0;
  var epsilonIndex6 = 1;
}
if (totalOfIndex7 > cutOffMark) {
  var gammaIndex7 = 1;
  var epsilonIndex7 = 0;
} else {
  var gammaIndex7 = 0;
  var epsilonIndex7 = 1;
}
if (totalOfIndex8 > cutOffMark) {
  var gammaIndex8 = 1;
  var epsilonIndex8 = 0;
} else {
  var gammaIndex8 = 0;
  var epsilonIndex8 = 1;
}
if (totalOfIndex9 > cutOffMark) {
  var gammaIndex9 = 1;
  var epsilonIndex9 = 0;
} else {
  var gammaIndex9 = 0;
  var epsilonIndex9 = 1;
}
if (totalOfIndex10 > cutOffMark) {
  var gammaIndex10 = 1;
  var epsilonIndex10 = 0;
} else {
  var gammaIndex10 = 0;
  var epsilonIndex10 = 1;
}
if (totalOfIndex11 > cutOffMark) {
  var gammaIndex11 = 1;answer;
  var epsilonIndex11 = 0;
} else {
  var gammaIndex11 = 0;
  var epsilonIndex11 = 1;
}


const gammaDigits = `${gammaIndex0}${gammaIndex1}${gammaIndex2}${gammaIndex3}${gammaIndex4}${gammaIndex5}${gammaIndex6}${gammaIndex7}${gammaIndex8}${gammaIndex9}${gammaIndex10}${gammaIndex11}`;
const epsilonDigits = `${epsilonIndex0}${epsilonIndex1}${epsilonIndex2}${epsilonIndex3}${epsilonIndex4}${epsilonIndex5}${epsilonIndex6}${epsilonIndex7}${epsilonIndex8}${epsilonIndex9}${epsilonIndex10}${epsilonIndex11}`;


console.log("gamma: ", gammaDigits)
console.log("epsilon: ", epsilonDigits)

const answer = parseInt(gammaDigits, 2) * parseInt(epsilonDigits, 2);

console.log ("answer: ", answer)

console.log(totalOfIndex0)