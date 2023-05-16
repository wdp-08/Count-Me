function countMe(arr) {
    const count = {};

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
if (count[element] === undefined) {
    count[element] = 1;
} else {
    count[element]++;
}
}
return count;
}

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));