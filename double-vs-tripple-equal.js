const first = 2;
const second = "2";
if(first == second){ //if the condition is == it don't check the type of the value. if we give === it will check the type of the value also.
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}

const first2 = 1;
const second2 = true;
if(first2 == second2){ // here 1 is the positive number and in the boolean true also positive value...we know that == do not check the type..so it will show Condition is true....bt if we give === it will check the type also..so if you are beginner javaScript developer I recommend you to use === sign when you compare anything. 
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}