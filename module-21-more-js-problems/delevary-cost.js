function deliveryCost(tshirt) {
  const first100TshirtPrice = 100;
  const second100TshirtPrice = 80;
  const restAllTshirtPrice = 50;
  let totalTshirtPrice = 0;

  if (tshirt <= 100) {
    totalTshirtPrice = tshirt * first100TshirtPrice;
    return totalTshirtPrice;
  } else if (tshirt <= 200) {
    const first100DelevaryCost = 100 * first100TshirtPrice;
    const second100DelevaryCost = (tshirt - 100) * second100TshirtPrice;
    totalTshirtPrice = first100DelevaryCost + second100DelevaryCost;
    return totalTshirtPrice;
  } else if (tshirt > 200) {
    const first100DelevaryCost = 100 * first100TshirtPrice;
    const second100DelevaryCost = 100 * second100TshirtPrice;
    const restDelevaryCost = (tshirt - 200) * restAllTshirtPrice;
    totalTshirtPrice =
      first100DelevaryCost + second100DelevaryCost + restDelevaryCost;
    return totalTshirtPrice;
  }
}

const totalDeliveryCost = deliveryCost(250);
console.log(totalDeliveryCost);
