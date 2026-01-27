// let headear=document.getElementById("heading");
// console.log(headear);
//  let headings=document.getElementsByClassName("heading2");
//  console.log(headings);


//  let first =document.querySelector("#heading");
//  console.log(first);

//  let firstclass=document.querySelectorAll(".heading2");
//  console.log(firstclass);

// let firs=document.getElementById("list");
// console.log(firs.firstElementChild.textContent);



// // 
// let div=document.querySelector("div");
// console.dir(div);


// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+ " from shweta kakade";




// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// let dev=document.querySelector("div");
// console.log(dev.getAttribute("class"));


// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);


// let div=document.querySelector("div");
// div.prepend(newbtn);

// div.append(newbtn);


//create button element give it to text style and add into body
let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
 console.log(btn);


document.querySelector("body").prepend(btn);
