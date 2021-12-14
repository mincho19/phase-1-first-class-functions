function func(){
    return 'done'
}

function receivesAFunction(func){
   func();
}

function returnsANamedFunction(){
    return (function add(){3+3;})
}

function returnsAnAnonymousFunction(){
    return ()=>'done'
}
