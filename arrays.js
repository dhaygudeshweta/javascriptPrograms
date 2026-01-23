// // using array calulate avg of marks
//  let marks=[78,98,34,65];
//  let sum=0;
//  for(let val of marks)
//  {
//   sum+=val;
//  }
//  let avg=sum/marks.length;
//  console.log(`avg marks of the class ${avg}`);
//





//write a program for a given array with price 5 items.all items have offer
// 10% off on them change the aaray to store final price after applying offer


//  let items=[250,640,60,90,50];
// let i=0;
// for(let val of items)
// {
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer   ${items[i]}`);
//     i++;
// }




// create an array to store companies ->"Bloomberg","Microsoft","Uber",
// "Google","IBM","Netflix"
// a. Remove the first company from the array 
// b. Remove the uber and add ola in its place
//  c. add apache at the end


// remove first company from array
let comp=["Bloomberg","Microsoft","Uber", "Google","IBM","Netflix"];

comp.shift();
console.log("after removing first company from the company",comp);

// add apache at end
comp.push("apache");
console.log("after adding to company",comp);

// remove uber and add ola in its place

let index=comp.indexOf("uber");
if(index!==-1)
{
    comp.splice(index,1,"ola");
    console.log("after removing uber and adding ola in comp",comp);
}
   




