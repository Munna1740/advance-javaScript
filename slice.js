
// slice the array part...
const num = [1,2,3,4,5,6,7,8];
const part = num.slice(2,5);
console.log(part);
console.log(num);

//splice the array part: 

const num2 = [1,2,3,4,5,6,7,8];
const part2 = num2.splice(2,5,40,60); // here 2 means from with index and 5 means how mush number I want to splice from the array....if I want, I can add extra number in the new array too.. here 40 and 60 insert in the new array.
console.log(part2);
console.log(num2);

// joint the array..
const together = num2.join(",");
console.log(together);