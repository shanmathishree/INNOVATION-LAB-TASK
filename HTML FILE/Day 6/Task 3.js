let person={name:"guna"};
function hello(msg){console.log(this.name,msg);}
hello.call(person,"from call");
hello.apply(person,["from apply"]);
let h=hello.bind(person,"from bind");h();
