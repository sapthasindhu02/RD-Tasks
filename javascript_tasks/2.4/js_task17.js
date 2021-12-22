function compose(...args) {
    const out=(arg)=> args.reduceRight((ar,func)=>func(ar),arg)
    return out
  }