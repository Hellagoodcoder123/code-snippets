var math = {
  abs:function(x:number){if(`${x}`.split('-')[1]===undefined){return x}else{return parseInt(`${x}`.split('-')[1])}},
  floor:function(x:number){return parseInt(`${x}`.split('.')[0])},
  ceil:function(x:number){if(`${x}`.split('.')[1]===undefined){return x}else{return parseInt(`${x}`.split('.')[0])+1}},
  divisibleBy:function(value:number,divisor:number){return value/divisor==math.floor(value/divisor)},
  isPrime:function(check:number){return !(math.divisibleBy(check,2)||math.divisibleBy(check,3)||math.divisibleBy(check,5)||math.divisibleBy(check,7))},
  isSquare:function(check:number){return Math.sqrt(check)==math.floor(Math.sqrt(check))},
  nextSquare:function(sqn:number){if(math.isSquare(check)){return check+(Math.sqrt(check)*2)-1}},
  isPositive:function(check:number){return math.abs(check)==check}
}
export {math}
