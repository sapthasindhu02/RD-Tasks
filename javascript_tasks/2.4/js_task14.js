function add(n){
    const func=function add1(b){
        n+=b
      return func;
      }
    func.toString = function(){
        return n;
    }
     return func   
    }