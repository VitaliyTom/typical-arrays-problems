exports.min = function min(array) {
	if (typeof array == 'undefined' || !array.length) {
		return 0;
	}
	let min = 9999;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return min;
};

exports.max = function max(array) {
	if (typeof array == 'undefined' || !array.length) {
		return 0;
	}
	let max = -9999;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
};

exports.avg = function avg(array) {
	if (typeof array == 'undefined' || !array.length) {
		return 0;
	}
	let avg = 0;
	for (let i = 0; i < array.length; i++) {
		avg = avg + array[i];
	}
	return avg / array.length;
};
