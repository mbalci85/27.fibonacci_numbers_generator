const fibonacciGenerator = (n) => {
	if (n == 1) return [0];
	else if (n == 2) return [0, 1];
	else if (n < 1) return `Enter a valid value`;

	let res = [0, 1];
	for (let i = 0; i < n - 2; i++) {
		res.push(res[i] + res[i + 1]);
	}
	return res;
};

console.log(fibonacciGenerator(10));
