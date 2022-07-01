var convert={
  binary:function(toConvert:string){
    return value.split(' ').join('00100000 ')
    .split('a').join('01100001 ')
    .split('b').join('01100010 ')
    .split('c').join('01100011 ')
  }
}
