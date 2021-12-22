var number_f=function(fn,n){
    if(!fn){//if it is undefined
      return n;
    }
    else{
      return fn(n)
    }
  }
  function zero(fn) {
     return number_f(fn,0)
  }
  function one(fn) {
    return number_f(fn,1)
  }
  function two(fn) {
    return number_f(fn,2)
  }
  function three(fn) {
    return number_f(fn,3)
  }
  function four(fn) {
     return number_f(fn,4)
  }
  function five(fn) {
     return number_f(fn,5)
  }
  function six(fn) {
     return number_f(fn,6)
  }
  function seven(fn) {
    return number_f(fn,7)
  }
  
  function eight(fn) {
    return number_f(fn,8)
  }
  function nine(fn) {
     return number_f(fn,9)
  }
  
  function plus(fun) {
    return function(x){
      return x +fun;
    }
  }
  function minus(fun) {
    return function(x){
      return x -fun;
    }
  }
  function times(fun) {
    return function(x){
      return x *fun;
    }
  }
  function dividedBy(fun) {
    return function(x){
      return Math.floor(x /fun);
    }
  }