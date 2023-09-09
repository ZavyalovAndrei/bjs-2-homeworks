"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = (b ** 2) - (4 * a * c);
	if (discriminant === 0) {
		arr.push(-b / (2 * a))
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let data = {
		percent,
		contribution,
		amount,
		countMonths
	};
	for (let index = 0; index < data.length; index++) {
		if (typeof(array[index]) !== "number") {
			let result = parseInt(array[index]);
			if (!isNaN(result)) {
				array[index] = result;
			} else {
				return false;
			}
		}
	}
	let monthlyRate = percent / (100 * 12);
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
	let totalPayment = +(monthlyPayment * countMonths).toFixed(2);
	return totalPayment;
}