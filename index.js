function produceDrivingRange(range) {
  return function (start, end) {
    const distance = end.slice(0, -2) - start.slice(0, -2);
    debugger
    if (distance > range) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(fraction) {
  return function (amount) {
    return amount * fraction;
  }
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
