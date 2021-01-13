function Fibonacci(n) {
  // write code here
  let f = 0;
  let next = 1;
  while (n--) {
    f = next + f;
    next = f - next;
  }
  return f
}

const f = Fibonacci(2)
console.log(f)
