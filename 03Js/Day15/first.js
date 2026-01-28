

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

  // const parent = document.getElementById("parent");
  // console.log(parent.children);

  // for (let child of parent.children){
  //   console.log(child);
  //   child.addEventListener('click',()=>{
  //     child.textContent= "you are click";
  //   })
  // }
//event bubbly

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);//tigger target pta chlata hai
     console.log("GrandParent is clicked");
},true)

const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
     console.log(e);
     // e.stopPropogation(); bubble off ke deta hai
     console.log("Parent is clicked");
},true)

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
     console.log(e);
     e.stopPropagation();
     console.log("child is clicked");
},true)

  // handle event 
  // capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
  // capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)