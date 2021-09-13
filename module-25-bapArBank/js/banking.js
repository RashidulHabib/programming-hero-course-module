// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   NOTE: get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // NOTE: update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // NOTE: clear the deposit input field
    depositInput.value = "";

    // NOTE: update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalancetotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
  });

//REVIEW: handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    console.log(newWithdrawAmount);

    // NOTE: update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // NOTE: clear withdraw input field
    withdrawInput.value = "";

    //NOTE: update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalancetotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
  });
