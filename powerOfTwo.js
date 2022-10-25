function isNoPowerOfTwo(n){
    //5 or 4
    if(n<1)
    return false;
    for(let i=2; i<n;i++)
        if(n == 2*i)
        return true;
        else 
        return false;
}

console.log(isNoPowerOfTwo(4));
console.log(isNoPowerOfTwo(8));
console.log(isNoPowerOfTwo(16));