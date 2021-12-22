Object.prototype.hash = function(string) {
    const arr = string.split('.');
    return arr.reduce(
      function(pv, cv){ 
       if(pv) {
         return pv[cv] 
       }
        else 
          return pv;
      },this)
}