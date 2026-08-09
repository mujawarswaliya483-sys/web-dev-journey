const student = {
    name:"swaliya",
    age:18,
    prop:this,  //global scope
                // in the global scope it has window object
    getName: function (){
      console.log(this);
      return this.name;
    }, 
    
    getMarks: () => {
        console.log(this); //parents scope -> window
        return this.marks;
    },

    getInfo1: function(){
        setTimeout(() =>{
            console.log(this); //student
        },2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    }
}
// for student object its 'this' is window object.
// function ke liye 'this' calling object hota hai
// when we call arrow function for arrow function 'this' is its parent function

let names=["soha","swal","heloo"];

let[winner,runnerup]=names;

console.log(winner,runnerup);