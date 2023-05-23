function countMe(arr) {
    const countObj = {};
  
    while (arr.length > 0) {
      const currentValue = arr.shift();
  
      if (countObj[currentValue]) {
        countObj[currentValue]++;
      } else {
        countObj[currentValue] = 1;
      }
    }
  
    return countObj;
  }

