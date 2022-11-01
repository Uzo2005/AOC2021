const data = require("./data");

const arrFromData = data.split("\n");


function getTotalOfIndex (dataEntries, index) {
  var totalOfIndex = 0;
  for (i = 0; i < dataEntries.length; i++) {
    let arrFromEachDataEntry = [...dataEntries[index]];

    var totalOfIndex = totalOfIndex + parseInt(arrFromEachDataEntry[index]);
  }
 
  return totalOfIndex;
};

function getOxygenGenRating(initialArr) {
  const numberOfDataElements = initialArr.length;
  const cutOffMark = numberOfDataElements / 2;
  var index = 0;
  
  if(numberOfDataElements==1){
    return initialArr[0]
    // console.log("stopped!")
  }else {
   
   const totalOfIndex = getTotalOfIndex(initialArr, 0)
    if(totalOfIndex >= cutOffMark){
        return totalOfIndex;
        // const newInitialArr = initialArr.map((element) => {
        //     let arrFromEachElement = [...element]
           
        //     if (arrFromEachElement[0] == '1'){
        //         return element
        //     }
        // })
        //  index++;
        //  getOxygenGenRating(newInitialArr);
    }else {
        return totalOfIndex
        // const newInitialArr = initialArr.map((element) => {
        //   let arrFromEachElement = [...element]
        //   if (arrFromEachElement[0] == "0") {
        //     return element;
        //   }

        // });
        // index++;
        // getOxygenGenRating(newInitialArr);
    }

  } 
  
}
const answer = getOxygenGenRating(arrFromData)

console.log("Answer is :", answer)

