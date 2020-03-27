
//normal way to use arguments
function add(num1,num2){
    console.log(...arguments);
    return num1+num2+ arguments[2];
}
const result = add(10,10,10);
console.log(result);