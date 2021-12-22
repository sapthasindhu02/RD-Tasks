function partitionOn(pred, items) {
    var count=0
    for(var i in items){
      if(!pred(items[i])){
        items.splice((count++),0,items.splice(i,1)[0])
      }
    }
    return count
    }