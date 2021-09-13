function max(numbers) {
  let large = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > large) {
      large = numbers[i];
    }
  }
  return large;
}

var givenArray = max([99, 2, 3, 400, 101, 22, 7, 8, 109]);
console.log(givenArray);
