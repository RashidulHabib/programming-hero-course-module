/* const givenMile = 22;
let animelCount = 0;
if (givenMile <= 10) {
  animelCount = givenMile * 10;
} else if (givenMile > 10 && givenMile <= 20) {
  animelCount = givenMile * 50;
} else if (givenMile > 20) {
  animelCount = givenMile * 100;
}
console.log(animelCount); */

function animelCount(miles) {
  const first10Miles = 10;
  const second10Miles = 50;
  const restMilescount = 100;
  if (miles < 10) {
    const count = miles * first10Miles;
    return count;
  } else if (miles <= 20) {
    const first10 = 10 * first10Miles;
    const restMiles = (miles - 10) * second10Miles;
    const totalAnimel = first10 + restMiles;
    return totalAnimel;
  } else if (miles <= 100) {
    const first10mile = 10 * first10Miles;
    const second10mile = 10 * second10Miles;
    const restAllMiles = (miles - 20) * restMilescount;
    const totalAnimelCount = first10mile + second10mile + restAllMiles;
    return totalAnimelCount;
  }
}
const animels = animelCount(35);
console.log(animels);
