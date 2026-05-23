 //console.log("hello world End");



// //code
// const p1 = fetch("https://api.github.com/users");

// // fullfilled ,reject

//  const p2 = p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })




// console.log("Hello World End");

// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//    // console.log(data);

//    for(let i=0;i<data.length;i++){
//    const parent = document.getElementById("first");
//    const image = document.createElement('img');
//    image.src= data[i].avatar_url;
//    image.style.height="40px";
//    image.style.width="40px";

//    parent.append(image);
//    }
// })

// const j1 ={
//     name: "anny",
//     age:"21",
//     address: "modeltown",
    
// }
// // convert to json

// const jsonFormat=JSON.stringify(j1);
// console.log(jsonFormat);

const  jsonFormat=`{
    "name":"anny",
    "age":"21",
    "address":"madeltowm"
}`;

//java script object

const JsObject = JSON.parse(jsonFormat);

console.log(JsObject);


const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Anny",
    customer_location: "town",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
     
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
       resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }

    },3000)
    })
   
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
  
     setTimeout(()=>{

        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
        
    },3000);
    })
    
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
         if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
    
}


placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ", error);
}).
finally(()=>{
    console.log("I am doing cleanup");
})