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

  console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
  // Output: { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }
  
  console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
  // Output: { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

  