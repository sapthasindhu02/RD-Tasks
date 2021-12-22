function isSantaClausable(obj) {
    var arr=['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
    return arr.every(function(method) {
      return typeof obj[method] == 'function';
    });
  }
