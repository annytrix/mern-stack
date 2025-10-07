// object
// key value in
// const user = {
//    name: "Anny",
//    age: 20,
//    emailId: "anny@gmail.com",
//    amount: 2600,
//    "home address": "Delhi"
// }


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);
// CRUD operation: Create read update delete


// console.log(user.age);

//  update
// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);

// // delete
// delete user.emailId;
// console.log(user);


// const user = {
//    name: "Anny",
//    age: 20,
//    emailId: "Anny@gmail.com",
//    amount: 2600,
// }

// const user2 = user;
// user2.age = 50;

// console.log(user);

// Important

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys, user[keys]); }

// user.keys user["name"] user["age"]


// const user = {
//    name: "Anny",
//    age: 20,
//    emailId: "Anny@gmail.com",
//    amount: 2600,}

// for of loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));
// [
//   [ 'name', 'Anny' ],
//   [ 'age', 20 ],
//   [ 'emailId', 'Anny@gmail.com' ],
//   [ 'amount', 2600 ]
// ]

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);

// }


// const name = user.name;
// const age = user.age;

// object ko destructing karna
// const {name:userName,age:userAge} = user;

// const arr = [10,20,40,80,11];

// const [first,second]= arr;

// console.log(userName,userAge);
// console.log(first,second);


// const user = {
//    name: "Anny",
//    age: 20,
//    emailId: "anny@gmail.com",
//    amount: 2600,
//    greeting: function(){
//     console.log(`hell every kaise ho ${this.name}`);
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`hello everyone kaise ho ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

// nested object

// const user = {
//    name: "Anny",
//    age: 20,
//    emailId: "anny@gmail.com",
//    amount: 2600,
//    address: {
//     city:"rajiw chowk",
//     state:"delhi"
//    }
// }

// shallow copy
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Delhi";

// console.log(user2);

// console.log(user.address.city);


// deep copy

// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";
// console.log(user);
// keY; String || Symbol

// const sym = Symbol("id");

// const user = {
//     name:"Anny",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hii Ji"
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

console.log(user[sym]);