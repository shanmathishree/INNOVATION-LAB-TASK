let users=[{name:"shanmathi",age:20},{name:"Bob",age:22}];
function add(...nums){return nums.reduce((a,b)=>a+b);}
console.log(add(1,2,3,4));
let arr1=[1,2],arr2=[3,4];
let merged=[...arr1,...arr2];
console.log(merged);
function greet({name,age}){console.log(`Hi ${name}, age ${age}`);}
users.forEach(greet);
