
function checkPrime(number){
    let factors=0;
    for(let i=1;i<=num;i++){
       if(num%i==0){
        factors++;
       }
     }
     if(factors==2){
          return true;
     }
     return false;                         
}

let answer=checkPrime(17);

if(answer==true){
   console.log("Prime Number");
}else{
   console.log("Not a Prime Number");
}