// let num=121;
// let rev=0;

// function isPalindrome(num){
//     let n=num;
//     let rev=0;

// while(num>0)
// {
//  let digit=num%10;
//  rev=rev*10+digit;
//  num=Math.floor(num/10);
    
// }
// if(n===rev)
// {
//     console.log("Palindrome");
// }else{
//     console.log("not ")
// }

// }
// isPalindrome(num);





// string palindrome or not 


// amma








let myString="12ammah8";
let rev="";

function stringPalindrome(myString){
 //let dupString=myString;

 for(let i of  myString)
 {
      rev=i+rev;
 }
if(rev===myString)
{
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
 

}


stringPalindrome(myString);