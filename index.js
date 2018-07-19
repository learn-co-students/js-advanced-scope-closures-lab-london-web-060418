function produceDrivingRange (blockRangeLimit) {
  let maxBlockRange = blockRangeLimit;
  return function (firstBlock, secondBlock) {
    let blockDifference = Math.abs(parseInt(secondBlock) - parseInt(firstBlock));
    let withinRange =  (blockDifference <= maxBlockRange) ? true : false
    return withinRange ? `within range by ${maxBlockRange - blockDifference}` : `${blockDifference - maxBlockRange} blocks out of range`
  }
}

function produceTipCalculator (tip_percentage_float) {
  let tip_percentage = tip_percentage_float;
  return function (mealCost) {
    return mealCost * tip_percentage;
  }
}
