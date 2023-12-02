const first = (input: string) => {
  const lines = input.split('\n'); // Split on newline
  let total = 0;

  lines.forEach((line) => {
    const numbers = line.match(/[0-9]/g); // Split on number
    if (numbers) {
      const digits = Number.parseInt(
        ''.concat(numbers[0], numbers[numbers.length - 1])
      );
      total += digits;
      // console.log(`Number: ${digits}`);
    }
  });

  // console.log(input);
  return total;
};

function findNumbers(text: string) {
  const result = text
    .replace(/one/g, '1')
    .replace(/two/g, '2')
    .replace(/three/g, '3')
    .replace(/four/g, '4')
    .replace(/five/g, '5')
    .replace(/six/g, '6')
    .replace(/seven/g, '7')
    .replace(/eight/g, '8')
    .replace(/nine/g, '9');
  console.log(`findNumbers - before: ${text} after: ${result}`);
  return result;
}

function makeDigits(input: string): number {
  const numbers = input.match(/[0-9]/g);
  const digits = Number.parseInt(
    ''.concat(numbers[0], numbers[numbers.length - 1])
  );
  console.log(
    `makeDigits - before: ${input} numbers: ${numbers} digits: ${digits}`
  );

  return digits;
}

const expectedFirstSolution = 54634;

const second = (input: string) => {
  const lines = input.split('\n'); // Split on newline
  let total = 0;

  lines.forEach((line) => {
    const numbers = findNumbers(line); // Split on number
    if (numbers) {
      const digits = makeDigits(numbers);
      total += digits;
      // console.log('Number: ' + digits)
    }
  });

  // console.log(input);
  return total;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
