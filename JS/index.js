let name = "john"
console.log("Hello, " + name + "!");
var age = 50;
const roll = 32;
console.log("Age: " + age + ", Roll: " + roll);
console.log("Updated Age: " + age);
let city = "New York";
console.log("City: " + city);

let user2 = "amin";

var userss = ["a", "b", "c"];

console.log(user2)
console.log(userss[0])

function greet(name) {
    console.log("helloo .."+ name)
}

greet("bro");


function sum(a, b){
    let total = a+b;
    return total;
}

let ans = sum(1, 2);

console.log(ans)


function canVote(age){
    if (age >= 18){
        return true;
    }
    return false;
}

console.log(canVote(20));


// types...
let user = {
    name: "amin",
    age: 19
}

console.log(user.age);
console.log(user.name)
console.log(user["name"])

function greetAgain(user) {
    console.log("Hi ..." + user.name + " your age is .." + user.age );


}

greetAgain(user)

//  Array of objects ..

let arr = ["amin", 21, {
    name: "amin",
    age: 21
}];

const v1 = arr[0];
const v2 = arr[2];

// console.log(v1);
// console.log(v2);

function getUsers(users){
    let arr2 = []
    for(let i = 0; i< users.length; i++){
        if(users[i].gender == "male" && users[i].age > 18){
            arr2.push(users[i]);
        }
    }
    return arr2;
}

const users = [
    {
    name: "amin",
    age: 21,
    gender: "male"
},
    {
        name: "priya",
        age: 21,
        gender:"female"
    },
    {
        name: "ajay",
        age:19,
        gender:"male"
    }
]


console.log(getUsers(users));


function filter(age){
    if (age >= 18){
        return true;
    }
    return false;
}
//  filter 
// 

const adults = users.filter(user => user.age >= 18 && user.gender == "male")
console.log(adults);


// map 

const gtThan18 = users.map(p => p.age > 18 ? p : null).filter(Boolean);
console.log(">...................>>>>>>>>>>>>")
console.log(gtThan18);

// reduce // immutable .. creates new array for each addition of element to acc
const gt18 = users.reduce((acc, person) => {
    if (person.age>18){
        acc.push(person);
    }
    return acc;
}, [] )

const expanded = users.flatMap(p => p.age > 18 ? [p, p.name] : []);




//acc code mutable, 
console.log("...................................")
const adult = users.reduce((acc, p) => {
    if(p.age>18) {
        acc.push(p);
    }
    return acc;
}, ["initial values"]); 

console.log(adult)