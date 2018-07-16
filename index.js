const produceDrivingRange = (range) => {
  return (x, y) => {
    x = parseInt(x.slice(0, -1))
    y = parseInt(y.slice(0, -1))

    if (x > y && x - y <= range){
      console.log(`within range by ${(range-(x-y))}`)
      return `within range by ${(range - (x-y))}`
    }

    else if (x > y && x - y >= range) {
      console.log(`${(x-y) - range} blocks out of range`);
      return `${(x-y)- range} blocks out of range`
    }

    else if (x < y && y - x <= range){
      console.log(`within range by ${(range - (y-x))}`);
      return `within range by ${(range - (y-x))}`
    }

    else if (x < y && y - x >= range) {
      console.log(`${(y-x) - range} blocks out of range`);
      return `${(y-x) - range} blocks out of range`
    }
  }
}


 const produceTipCalculator = (percent) => {
   console.log(percent)
   return (fare) => {
     return fare * percent
   }
 }
