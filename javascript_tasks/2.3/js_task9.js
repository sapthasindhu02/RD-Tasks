
function exec(n,v,res){
    if(n==0){
      return res
    }
    else{
      res.push(v)
      return exec(n-1,v,res)
    } 
  }
  
  function prefill(n, v) {
    var result=[]
    if(n<0 || typeof n==='boolean' || !Number.isInteger(Number(n))){ throw new TypeError(n+" is invalid")}
    else{
    return exec(n,v,result)
      }
  }
  