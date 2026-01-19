//prorgam for even numbers 
// for(let i=0 ;i<=100;i++)
// {
//     if(i%2===0)
//     {
// console.log("i is=",i);
//     }
    
    
// }
// 


// program for guessing the write number game

let gameNum=20;
let userNum=prompt("Guess thenumber");
while(userNum!=gameNum)
{
    userNum=prompt("you entered wrong number");
}
console.log("congratulations you enterd right number");
