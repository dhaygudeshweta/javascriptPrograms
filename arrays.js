// // using array calulate avg of marks
//  let marks=[78,98,34,65];
//  let sum=0;
//  for(let val of marks)
//  {
//   sum+=val;
//  }
//  let avg=sum/marks.length;
//  console.log(`avg marks of the class ${avg}`);

let items=[250,640,60,90,50];
let i=0;
for(let val of items)
{
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer   ${items[i]}`);
    i++;
}