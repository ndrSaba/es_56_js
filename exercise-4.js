function sum(...num) {
  let total = 0;
  for (const i of num) {
    total += i;
  }
  return total;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));