function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock){
    let range = parseInt(endBlock) - parseInt(startBlock);

    if (range < blockRange) {
      return `within range by ${blockRange - range}`;
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (total) {
    return total * tipPercent
  }
}
//
// produceDrivingRange() - Returns a function that then
// calculates whether a given trip is within range. For
// example, produceDrivingRange(10) returns a function
// that will return false if the trip is over 10 blocks
// distance and true if the distance is within range.
// So produceDrivingRange returns a function that we can
// then use to calculate if a trip is too large for a driver.
// We recommend referencing the test/indexTest.js for more
// details.

// function createItem(){
//   let ItemId = 0
//   // return the class
//   return class {
//     constructor(name, manufacturePrice){
//       this.name = name
//       this.manufacturePrice = manufacturePrice
//       this.id = ++ItemId;
//     }
//
//     retailPrice(marketMultiplier){
//       return marketMultiplier * this.manufacturePrice;
//     }
//   }
// }
