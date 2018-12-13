function factorial(number){
    var value = number;
    for ( var i = number; i > 1; i-- )
      value *= i - 1;
    return value;
}
function combination(n, r){
    if ( n == r) return 1;
    return factorial(n) / (factorial(r) * factorial(n - r));
}
document.getElementById('calculate').onclick =
function(){
    var n =
    parseFloat(document.getElementById('n').value),
    r =
    parseFloat(document.getElementById('r').value);
    if (n && r){
        document.getElementById('result_combinations').innerHTML = 
    combination(n,r);
    }
}

function permutation(q,s){
    var check = document.getElementById('repetitions');
    if (check.checked)
    {
        return Math.pow(q,s);
    }
   else if (q == s) return factorial(q) ;
    return factorial(q) / factorial(q - s) ;
}
document.getElementById('calculate1').onclick =
function(){
    var q =
    parseFloat(document.getElementById('q').value),
    s = 
    parseFloat(document.getElementById('s').value);    
    if( q && s){
        document.getElementById('result_permutations').innerHTML =
        permutation(q,s);
    }
}