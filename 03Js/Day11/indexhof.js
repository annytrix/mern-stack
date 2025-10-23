// Scope and closure , HOF
// Global_> Accessible to everyone
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block (usi block ke ander)
// let a = 40;
//  const b = 30;
  
//  if(true){
//  onsole.log(b)
    
// }

 
//  function greet(){
//     let c=20;
//     console.log(c)
// }

// greet();

// let global =60;

 

// function greet(){

//     let global = 70;
//    console.log(global)

// apne ander ki block ko check kerta hai

//      function meet(){
//         let global = 10;
//          console.log(global);
//         }
    
//      meet();
// }   

//  greet();


// function createCounter(){
    
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

//  console.log(count);
// count ko stack se  heap me push kr deta hai (memory excute kra deta h )
// jisse count pass increment ka accssic hoga
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


let balance = 200;




balance+="Anny";

 console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

 
// }





// const customer = createBankAccount();
// console.log(customer.withdraw(200));


// Higher order function


// function double(value){

//     return function execute(num){
//         return num*value;
//     }
    
// }

// const n = double(20)(5);
// console.log(n);