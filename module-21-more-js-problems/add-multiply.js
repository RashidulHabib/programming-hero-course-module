function woodMeasure(khat, table, chair) {
  const khatWood = khat * 50;
  const tableWood = table * 10;
  const chairWood = chair * 3;

  let totalWood = khatWood + tableWood + chairWood;
  return totalWood;
}

const totalWoodNeeded = woodMeasure(1, 1, 1);
console.log(totalWoodNeeded);
