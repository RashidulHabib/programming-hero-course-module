/* function doubleIt(num) {
  const result = num * 2;
  return result;
}

 */

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // NOTE: clear the deposit input field
  inputField.value = "";

  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousAmount = parseFloat(totalText);
  const newTotal = previousAmount + amount;
  totalElement.innerText = newTotal;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalancetotal = parseFloat(balanceTotalText);
  return previousBalancetotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  /* 
 const balanceTotalText = balanceTotal.innerText;
  const previousBalancetotal = parseFloat(balanceTotalText); 
  */
  const previousBalancetotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalancetotal + amount;
  } else {
    balanceTotal.innerText = previousBalancetotal - amount;
  }
}

// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   NOTE: get the amount deposited

    // NOTE: update deposit total
    /* const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal; */

    // NOTE: update account balance
    /*
     const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalancetotal + depositAmount; 
    */

    // ----------------------------------------------------------------
    //   NOTE: get the amount deposited
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      // NOTE: update deposit total
      updateTotalField("deposit-total", depositAmount);
      // NOTE: update account balance
      updateBalance(depositAmount, true);
    }
  });

//REVIEW: handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */

    // NOTE: update withdraw total
    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    const newWithdrawTotal = previousWithdrawTotal + WithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */

    //NOTE: update account balance
    /* 
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalancetotal - WithdrawAmount; 
    */

    // --------------------------------------------------------------------
    //   NOTE: get the amount withdraw
    const WithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (WithdrawAmount > 0 && WithdrawAmount < currentBalance) {
      // NOTE: update withdraw total
      updateTotalField("withdraw-total", WithdrawAmount);
      //NOTE: update account balance
      updateBalance(WithdrawAmount, false);
    }
    if (WithdrawAmount > currentBalance) {
      alert("You can not withdraw more then current balance");
    }
  });
