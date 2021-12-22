function createSecretHolder(secrett) {
    var secret=secrett;
   var obj={
    setSecret:function(sec){
      function implement(sec){
        secret=sec;
      }
      implement(sec);
    },
    getSecret:function(){
      function impl_ement(){
        return secret;
      }
      return impl_ement();
    }
    
  }
    return obj;
  }