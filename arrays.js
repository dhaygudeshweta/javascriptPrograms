// using array calulate avg of marks
 let marks=[78,98,34,65];
 let sum=0;
 for(let val of marks)
 {
  sum+=val;
 }
 let avg=sum/marks.length;
 console.log(`avg marks of the class ${avg}`);