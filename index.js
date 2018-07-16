//calc if given trip is within a range
//true or false given the range:

function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){

    let range = parseInt(endBlock) - parseInt(startBlock);

    if( range < blockRange){
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

//calc tip based on the fare (% varies):

function produceTipCalculator(percentage) {
  return function(fare){
    return fare * percentage;
  }
}

//returns a function that returns a class that
//produces a Driver class.
//The class has reference to a driverId that
//is incremented each time a new driver is created.
//The rest of the code base does not have access
//to driverId.

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
