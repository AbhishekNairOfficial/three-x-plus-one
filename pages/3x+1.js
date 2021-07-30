const numberFunction = (numberInput) => {
	const loopDdeLoop = (input) => {
		let number = input
		const theNumberIsOdd = number & 1
		if (theNumberIsOdd) {
			// If number is odd
			// Multiply by 3 and add 1
			number = number * 3 + 1
		} else {
			// If number is even
			// divide by 2
			number = number / 2
		}
		// If the new number is higher than the previous
		// Update the highest number count
		if (number >= highestCount) {
			highestCount = number
		}
		return [number, highestCount]
	}

	let number = numberInput
	let count = 0
	let highestCount = number
	while (number !== 4) {
		count++
		;[number, highestCount] = loopDdeLoop(number)
	}
	return [count, highestCount]
}

export default numberFunction
