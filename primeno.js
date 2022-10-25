function isPrimeNoFmethod1(n){
    if(n<2)
    return false;
    for(let i=2; i<n;i++){
        if(n%i === 0)         // depending on n the time complexity will be liner
        return false;
    }
    return true;
} //O(n)


function isPrimeNo(n){
    if(n<2)
    return false;
    for(let i=2; i<=Math.sqrt(n);i++){
        if(n%i === 0)       // depending on n the time complexity will be SQRT(n) hence more optimised code!
        return false;
    }
    return true;

}//O(SQRT(n))

console.log(isPrimeNo(1000))
console.log(isPrimeNo(37))
console.log(isPrimeNo(90))