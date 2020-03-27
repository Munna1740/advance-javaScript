// False:
// 0 , "", undefined, null, NaN, false,  
// True:
// " ", "0", without declare array [] , without declare objects {},

const name=0;
if(name || name==0){
    console.log("Condition is true");
}
else {
    console.log("Condition is false");
}