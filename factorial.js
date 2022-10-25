//Factorial of a number
const fact0 = 1;
const fact1 = 1;
const fact2 = 2;
function Factorial(n){
    let result = 1;
    if(n==0 || n==1)
    return 1;
    if(n==2)
    return 2;
    if(n>2){
        for(let i=2;i<=n;i++){
            result = result*i         //O(n)
         }  
    }
    return result;
}

console.log(Factorial(5));
console.log(Factorial(3));
console.log(Factorial(6));

//Wost case time complexity
// BIG O => O(n)
