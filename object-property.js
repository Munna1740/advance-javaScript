// find specific value of the object in the array
const studentName = [];
const student = [
    {id:161, name:"Munna"},
    {id:162, name:"Adity"},
    {id:163, name:"Saleh"},

];

for (let i= 0 ; i<student.length; i++){
    const stName = student[i].name;
    studentName.push(stName);

}
console.log(studentName);

// smart way to find a specific value of the object in the array:

const names = student.map(stName => stName.name);
console.log(names);

// filter in the array:
const ids = student.filter(sId => sId.id>161);
console.log(ids);

// find in the array:
const ids2 = student.find(sId => sId.id>161);
console.log(ids2);