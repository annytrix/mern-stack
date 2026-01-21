

// function handleClick(){
//     const element = document.getElementById("first");
//      element.textContent = "Hii Anny";
// }

//  const element = document.getElementById("first");
// element.onclick = function handleClick(){
// element.textContent = "Hii Anny";
// }

// element.onclick = function handleClick(){
//   element.textContent = "yes plz";
 
// element.addEventListener('click',()=>{
//    element.textContent="helo Anny";
//   })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="yellow";
//   })

//  const child1 = document.getElementById("child1");
//  child1.addEventListener('click',()=>{
//   child1.textContent = "you are clicked";
//  })

  const parent = document.getElementById("parent");
  console.log(parent.children);

  for (let child of parent.children){
    console.log(child);
    child.addEventListener('click',()=>{
      child.textContent= "you are click";
    })
  }