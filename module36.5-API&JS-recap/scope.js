const baperTaka = 100000000;
function patroChai(age, earning) {
  console.log(trueAge);
  var decision = canMarry(15000);
  console.log(decision);
  console.log(age);
  console.log(earning);

  var trueAge = age + 7;
  //   const trueAge = age + 7;

  //NOTE: var দিলে শুধু বামের অংশটাকে নিবে। ডানে কি আছে দেখবে না
  function canMarry(expense) {
    //   var canMarry = function (expense) {
    const remaining = baperTaka + earning - expense;
    // console.log(showing);
    if (remaining > 10000) {
      var showing = 500;
      //   const showing = 500;
      console.log(showing);
      return true;
    }
    return false;
  }
}

patroChai(21, 50000);
