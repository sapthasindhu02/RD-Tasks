function getMiddle(s)
{
  //Code goes here!
  s=s.split('');
  var len=s.length;
  var start=Math.floor(len/2);
  return ((len)%2==0?(s.splice((start-1) ,2).join('')):(s.splice(start,1)+''))
  
}