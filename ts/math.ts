var math = {
  abs:function(x){if(`${x}`.split('-')[1]===undefined){return x}else{return parseInt(`${x}`.split('-')[1])}},
  floor:function(x){return parseInt(`${x}`.split('.')[0])},
  ceil:function(x){if(`${x}`.split('.')[1]===undefined){return x}else{return parseInt(`${x}`.split('.')[0])+1}}
  divisibleBy:function(value,divisor){return value/divisor==math.floor(value/divisor)},
  isPrime:function(check){return !(math.divisibleBy(check,2)||math.divisibleBy(check,3)||math.divisibleBy(check,5)||math.divisibleBy(check,7))},
  isSquare:function(check){return Math.sqrt(check)==math.floor(Math.sqrt(check))},
  nextSquare:function(sqn){if(math.isSquare(check)){return check+(Math.sqrt(check)*2)-1}},
  isPositive:function(check){return math.abs(check)==check}
}
export {math}
