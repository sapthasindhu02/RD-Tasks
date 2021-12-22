var Cat = function (name,weight) {
    if(arguments.length<2) throw new TypeError("Invalid");
    Cat.S=(Cat.S || 0) + weight;
    Cat.count=(Cat.count || 0) + 1;
    Object.defineProperty(this, "weight", {
        get:function()
        {
        return weight;
        }, 
        set:function(w){
            Cat.S-=weight;
            Cat.S+=w;
            weight=w;
        }
    })
  };
  Cat.averageWeight = function(){
     return Cat.S/Cat.count;
    }