
let user={name:"shanmathi",age:20,address:{city:"Coimbatore",pin:641107}};
let {name,address:{city}}=user;
console.log(name,city);
console.log(user["age"]);
for(let k in user){console.log(k,user[k]);}
