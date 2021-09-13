function updateProductNumber(product, price, isIncreaseing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreaseing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update product-total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerHTML = productNumber * price;

  // NOTE: calculate total
  calculateTotal();
}

// NOTE: handle phone increase & decrease event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

// NOTE: handle case increase & decrease event
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
  //   caseInput.value = parseInt(caseNumber) - 1;
});

function getInputValue(product) {
  //   debugger;
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  //NOTE: update subtotal value in html
  document.getElementById("sub-total").innerHTML = subTotal;
  document.getElementById("tax-amount").innerHTML = tax;
  document.getElementById("total-price").innerHTML = totalPrice;
}
