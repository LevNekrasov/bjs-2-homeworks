"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  console.log(discriminant)
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
    return arr;
  }
  else if (discriminant == 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  };
  let P = percent / 100 / 12;
  let sum = amount - contribution;
  let monthlyPayment = sum * (P + (P / ((Math.pow((1 + P), countMonths) - 1))));
  let loanAmount = monthlyPayment * countMonths;
  let loanAmountEnd = Number(loanAmount.toFixed(2));
  return loanAmountEnd;
}