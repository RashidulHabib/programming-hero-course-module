function bringSingara(taka) {
  console.log("singara ar jonno dise", taka);
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log("ai nen Singara", singara);
