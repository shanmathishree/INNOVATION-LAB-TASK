
let student={
    name:'Sanmathishree',
    age:20,
    displayInfo:function(){
        console.log('Name: ${this.name},Age:${this.age}');
    }
};
student.displayInfo();
studemt.greet=function(){
    console.log('Hello,Im ${this.name}');
};
student.greet();
console.log(student.name);
student.name='Sanmathishree';
console.log(student.name);
