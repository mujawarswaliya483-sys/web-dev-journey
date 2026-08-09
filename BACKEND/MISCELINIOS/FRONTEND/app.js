// const stu1 = {
//     mane: "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const stu2 = {
//     mane: "sara",
//     age: 15,
//     marks: 85,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const stu3 = {
//     mane: "adil",
//     age: 35,
//     marks: 90,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// understanding prototype
// let arr = [1,2,3];
// let arr2 = [4,5,6];

// arr.sayHello = () =>{
//     console.log("Hello!,I am arr");
// }

// Factory Functions

// function PersonMaker(name,age){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi,my name is ${this.name}`);
//         },
//     }
//     return person;
// }

// CONSTRUCTOR - doesent return anything and start with capital

// function Person(name,age){
//     this.name;
//     this.age;   
// }
// let p1 = new Person("adam",25);
// let p2 = new Person("adil",35);

// inheritance

class Person{  //same properties of students and teacher will put in person class to stop repeted member function 
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     talk(){
        console.log(`hi i am ${this.name}`);
    }
}
class Student extends Person{
    construtor(name,age,marks){
        // this.name= name;
        // this.age= age;
        console.log("student class constructor");
        // super(name,age); //parent class constructor is being called
        this.marks= marks;
    }
//     talk(){
//         console.log(`hi i am ${this.name}`);
//     }
 }

// let stu1 = new Student("swaliya",35,95);

class Teacher extends Person{
    constructor(name,age,subject){
        // this.name= name;
        // this.age= age;
        // super(name,age);
        this.subject= subject;
    }
    // talk(){
    //     console.log(`hi i am ${this.name}`);
    // }
}

class Mamal{
    constructor(name){
        this.name=name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mamal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woff...");
    }
    eat(){
        console.log("dog is eating");
    }

}

class Cat extends Mamal{
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow");
    }

    eat(){
        console.log("Cat is eating");
    }
}