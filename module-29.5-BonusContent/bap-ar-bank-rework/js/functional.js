function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  const value = parseFloat(valueInText);
  inputField.value = "";
  return value;
}

function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotalText = totalTag.innerText;
  const previousTotal = parseFloat(previousTotalText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    updateTotal("deposit-total");
  });
