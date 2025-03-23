const readline = require('readline');

// Створюємо інтерфейс для зчитування рядків з консолі
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Обробляємо кожен введений рядок
rl.on('line', function(line) {
  const charCount = {};

  // Підраховуємо кількість кожного символу, крім пробілів
  for (let char of line) {
    if (char !== ' ') {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // Перевіряємо, чи є хоча б один символ, що зʼявляється рівно 2 рази
  const hasExactlyTwo = Object.values(charCount).some(count => count === 2);

  if (hasExactlyTwo) {
    console.log(line);
  }
});
