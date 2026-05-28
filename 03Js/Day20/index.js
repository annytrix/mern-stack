//async await

//async function greet(){
   // return "Anny singh";


//return new Promise((resolve ,reject)=>{
  //  reject("Anny singh");
//})
//}
//const response = greet();
//console.log(response);
//response.then((data)=>console.log(data));

 //.catch((error)=>{
    //console.log("Error:",error);
    //})

    // fetch("https://api.github.com/users")
    // .then((response )=>response.json())
    // .then((data)=>console.log(data));
  const response=await fetch("https://api.github.com/users")
  const data= await response.json();
  console.log(data);