Array.prototype.square = function() {
    return this.map((item)=> Math.pow(item, 2));
}

Array.prototype.cube = function() {
    return this.map((item)=> Math.pow(item, 3));
}

Array.prototype.average = function() {
    if(this.length==0){return NaN}
    return this.reduce((p,c)=>(p+c)) / this.length;
}

Array.prototype.sum = function() {
    if(this.length==0){return 0}
    return this.reduce((p,c)=>(p+c));
}

Array.prototype.even = function() {
    return this.filter((item)=> item%2==0);
}

Array.prototype.odd = function() {
    return this.filter((item)=>  item%2==1);
}