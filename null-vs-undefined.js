//if we don't give anything its show undefined 
let name;
console.log(name);

// if we don't return the value any function, it work in the function bt also show undefined
function add(num1,num2){
    console.log(num1+num2);
}
const result = add(15,20);
console.log(result);

// if we don't pass any number in function its show undefined 

function add2(num1,num2){
    console.log(num1,num2)
}
const result2= add2(12);
console.log(result2);

// if any value missing in the object..but you want to call in the object it shows undefined 
const information = {name: "Munna", phone: 01844};
console.log(information.id);

// if we declare undefined reserved keyword it shows undefined heheheh XD

const fun = undefined;
console.log(fun);

// if an array don't have the index of the number but I want to show the number of that index it shows undefined 
const arr = [10,20];
console.log(arr[5]);

// Thats all today :)