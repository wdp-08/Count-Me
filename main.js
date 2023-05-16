function countMe(arr) {
    let count = {};
    arr.forEach(function(element) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
      });      
    return count;
  }
  
  console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
  console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
  