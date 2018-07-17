function produceDrivingRange(blockRange) {
  return function (startBlock, endBlock) {
    let range =  parseInt(endBlock) - parseInt(startBlock)
    if (range < blockRange) {
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (fare) {
    let tip =  (fare * percent)
    return tip
  }
}

// for some reason only the first two tests show up? i tried the below too

// function createDriver() {
//   let driverId = 0
//     return class {
//       constructor(name)
//       this.id = driverId ++
//       this.name = name
//     }
// }

// function produceDrivingRange(blockRange) {
//   return function hey() {
//     return 'hey'
//   }
// }
