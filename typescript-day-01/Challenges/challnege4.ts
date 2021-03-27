// Problem 4
// Keep the return type string

function subtractNums(num1: string | number, num2: string | number): string {
  let numberSub = String(+num1 - +num2);
  return numberSub;
}

console.log(subtractNums("10", "5"));
