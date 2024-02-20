function add(a , b){
    return a + b;
};

function sub(a, b){
        return a - b;
}

function mul(a, b){
    return a*b;
}

function mod(a, b){
    return a % b;
}

function div(a, b){
    return a / b;
}


function greater(a, b){
   return a >b ?  a : b ;
}


function smaller(a,b){
    return a < b ? a : b ;
}

function add5(a , b){
    return a + b + 5;
}


function add10(a , b){
    return a + b + 10;
}

function add2(a , b){
    return a + b + 2;
}


const saurabhcalc = {
    add, 
    sub,
    mul,
    mod, 
    div,
    greater,
    smaller,
    add5,
    add10,
    add2
}

module.export = saurabhcalc;


//npm init
//npm login
//npm publish