/* function fibonaccci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonaccci(n - 1) + fibonaccci(n - 2);
}

const fiboEliment = fibonaccci(6);
console.log(fiboEliment);
 */

function fibonaccciSeries(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  const fibo = fibonaccciSeries(n - 1);
  fibo[n] = fibo[n - 1] + fibo[n - 2];
  return fibo;
}

const fiboEliment = fibonaccciSeries(6);
console.log(fiboEliment);
