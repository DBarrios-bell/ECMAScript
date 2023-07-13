//flat
const array = [1,2,3,2,4,[2,1,34,6,[7,2,98,4,3,6]]];

console.log(array.flat(3));

let flat = array.flat(3);

console.log(flat[0],flat[14]);
console.log(flat.length);

//flatMap

const array2 =[1,2,3,4,5];
console.log(array2.flatMap(v => v));
console.log(array2.flatMap(v => [v * 2]));
console.log(array2.flatMap(v => [v, v * 2]));