//finbonacci sequence
let finbonacci = [0,1];

function finbonacciSeries(n){
    for(let i=2; i<n; i++)
    finbonacci[i] = finbonacci[i-1]+finbonacci[i-2]    // ==> O(n)
    return finbonacci;
}

console.log(finbonacciSeries(7));

//Time conplexity
// Big(O) = O(n)