// normal way
const numbers = [2,4,6,8,3,5,1];
const output = [];

for(let i =0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
console.log(output);

// Smart way 

const result = numbers.map(function(element2){
    return element2 * element2;
})
console.log(result);

// another smart way 
const result2 = numbers.map(element => element*element);
console.log(result2);

// how filter works:
const bigger = numbers.filter(element => element >5);
console.log(bigger);

//find is used to find the nearest big number
const bigger2 = numbers.find(element => element >5);
console.log(bigger2);

