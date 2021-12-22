function rentalCarCost(d) {
    return ori_cost(d) - disc_pr(d);
  }
  function ori_cost(d) {
    return d * 40;
  }
  function disc_pr(days) {
    if ( days<3 ) {
      return 0;
    }
    else if ( days< 7 ) {
      return 20;
    }
    else {
      return 50;
    }
  }