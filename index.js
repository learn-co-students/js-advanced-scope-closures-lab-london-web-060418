function produceDrivingRange(range){
  return function(start, end){
    const distance = end.slice(0, -2) - start.slice(0, -2);
    if (range > distance){
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
};

function produceTipCalculator(tip){
  return function(totalFare){
    return totalFare * tip
  }
};

function createDriver(){
  let DriverID = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverID
    }
  }
}
