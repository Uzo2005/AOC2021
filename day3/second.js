const data = require("./data");

const arrFromData = data.split("\n");

function getOxygenGenRating(initialArr, j) {
  const numberOfDataElements = initialArr.length;
  const cutOffMark = numberOfDataElements / 2;
  const newInitialArr = [];

  if (numberOfDataElements == 1) {
    return initialArr
  } else {
    
    const getTotalOfIndex = (Arr, index) => {
      var totalOfIndex = 0;

      for (i = 0; i < Arr.length; i++) {
        let arrFromEachDataEntry = [...Arr[i]];

        var totalOfIndex = totalOfIndex + parseInt(arrFromEachDataEntry[index]);
      }

      return totalOfIndex;
    };
    const totalOfIndexArr = getTotalOfIndex(initialArr, j);

    if (totalOfIndexArr >= cutOffMark) {
      
      for (i = 0; i < initialArr.length; i++) {
        let element = initialArr[i];
        let arrFromEachElement = [...element];

        if (arrFromEachElement[j] == "1") {
          newInitialArr.push(element);
        }
      }

     
    } else {
      
      for (i = 0; i < initialArr.length; i++) {
        let element = initialArr[i];
        let arrFromEachElement = [...element];

        if (arrFromEachElement[j] == "0") {
          newInitialArr.push(element);
        }
      }

      
    }

  }
 return newInitialArr
}


function getCo2ScrubberRating(initialArr, j) {
  const numberOfDataElements = initialArr.length;
  const cutOffMark = numberOfDataElements / 2;
  const newInitialArr = [];

  if (numberOfDataElements == 1) {
    return initialArr
  } else {
    const getTotalOfIndex = (Arr, index) => {
      var totalOfIndex = 0;

      for (i = 0; i < Arr.length; i++) {
        let arrFromEachDataEntry = [...Arr[i]];

        var totalOfIndex = totalOfIndex + parseInt(arrFromEachDataEntry[index]);
      }

      return totalOfIndex;
    };
    const totalOfIndexArr = getTotalOfIndex(initialArr, j);

    if (totalOfIndexArr < cutOffMark) {
      //there are more zeroes
      for (i = 0; i < initialArr.length; i++) {
        let element = initialArr[i];
        let arrFromEachElement = [...element];

        if (arrFromEachElement[j] == "1") {
          newInitialArr.push(element);
        }
      }
    } else {
      //there are less zeroes
      for (i = 0; i < initialArr.length; i++) {
        let element = initialArr[i];
        let arrFromEachElement = [...element];

        if (arrFromEachElement[j] == "0") {
          newInitialArr.push(element);
        }
      }
    }
  }
  return newInitialArr;
}



const getFinalOxygenRating = getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(getOxygenGenRating(arrFromData, 0), 1), 2), 3), 4), 5), 6), 7), 8), 9), 10), 11)
const getOxygenGenRatingInDecimal = parseInt(getFinalOxygenRating, 2)
const getFinalCo2ScrubberRating = getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(getCo2ScrubberRating(arrFromData, 0), 1), 2), 3), 4), 5), 6), 7), 8), 9), 10), 11)
const getCo2ScrubberRatingInDecimal = parseInt(getFinalCo2ScrubberRating, 2)

const answer = getCo2ScrubberRatingInDecimal * getOxygenGenRatingInDecimal

console.log("Answer is :", answer);
