"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
return arr;
}

if (discriminant === 0) {
arr.push(-b / (2 * a));
}

if (discriminant > 0) {
arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
}
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    !Number.isFinite(percent) ||
    !Number.isFinite(contribution) ||
    !Number.isFinite(amount) ||
    !Number.isFinite(countMonths)
  ) {
    return false;
  }

  const body = amount - contribution;

  if (body <= 0) {
    return 0;
  }

  const monthlyPercent = percent / 100 / 12;

  const monthlyPayment =
    body *
    (monthlyPercent +
      monthlyPercent /
        ((1 + monthlyPercent) ** countMonths - 1));

  const total = monthlyPayment * countMonths;

  return Number(total.toFixed(2));
}