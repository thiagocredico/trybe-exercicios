// const numbers = [1, 2, 3, 4, 5];
// let pairs = 0;

// for (let i = 0; i < numbers.length; i++) {
//  for (let j = i + 1; j < numbers.length; j++) {
//    if (numbers[i] + numbers[j] === 6) {
//      pairs++;
//    }
//  }
// }

console.log(`There are ${pairs} pairs that add up to 6.`);

const numbers = [1, 2, 3, 4, 5];
const complementaries = {};
let pairs = 0;

for (let i = 0; i < numbers.length; i++) {
	const currentNumber = numbers[i];
	const complementary = 6 - currentNumber;

	if (complementaries[complementary]) {
		pairs += complementaries[complementary];
	}

	if (!complementaries[currentNumber]) {
		complementaries[currentNumber] = 0;
	}

	complementaries[currentNumber]++;
}

console.log(`There are ${pairs} pairs that add up to 6.`);
