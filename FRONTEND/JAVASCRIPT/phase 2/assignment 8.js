// Q1


// Q2.

let numbers = [1,2,3,4,5,6];

console.log(numbers.map((numbers)=> number + 5));


// Q3.

let strings = ["apnacoll","swaliya"];

console.log(strings.map((string) => string.toUpperCase()));

// Q4.

const doubleAndReturn = (arr, ...args)=>[
    ...arr,...args.map((v)=>v*2),
];

doubleAndReturnArgs([1,2,3],4,4); //[1,2,3,8,8]
doubleAndReturnArgs([2],10,4); //[2,20,8]


// Q5.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({ a:1,b:2}, {c:3, d:4});

// {a:1, b:2, c:3, d:4}

