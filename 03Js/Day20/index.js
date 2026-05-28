//async await

async function greet(){
    return "Anny singh";


return new Promise((resolve ,reject)=>{
    reject("Anny singh");
})
}
const response = greet();
//console.log(response);
response.then((data)=>console.log(data));

 //.catch((error)=>{
    //console.log("Error:",error);
    //})
    