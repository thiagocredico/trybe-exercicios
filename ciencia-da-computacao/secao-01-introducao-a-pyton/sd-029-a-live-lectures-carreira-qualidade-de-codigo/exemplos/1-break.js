// A busca linear e o uso do break

const numbers = [10, 20, 30, 40, 50];
const target = 30;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    console.log(`Found target at index ${i}`);
    break;
  }
}