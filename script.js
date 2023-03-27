function sum(a) {
  let allSum = a;

  function f(b) {
    allSum += b;
    return f;
  }

  f.toString = function () {
    return allSum;
  };

  return f;
}

console.log(sum(1)(2));
console.log(sum(1)(2)(3));
