//Questão 1
const fornecedorA = document.querySelector();

function contMedia(fornecedorA, fornecedorB, fornecedorC) {
  const total = fornecedorA + fornecedorB + fornecedorC;
  return total / 3;
}
contMedia(1, 2, 3);

/* //Questão 2
function contMedia(fornecedorA) {
  if (fornecedorA % 2 === 0) {
    console.log('Número par');
  } else {
    console.log('Número ímpar');
  }
}
contMedia(7);
 */

/* //Questão 3
for (let i = 10; i >= 1; i--) {
  console.log(i);
} */

/* //Questão 4
function factorialize(num) {
  if (num < 0) return 'Por favor inserir número acima de 0';
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(3)); */

/* //Questão 5

let repeatLetter = 'e';
const phrase = 'Este é um teste';

var amount = 0;
for (var i = 0; i < phrase.length; i++) if (phrase[i] == repeatLetter) amount++;
console.log(
  `A quantidade de vezes que a letra "${repeatLetter}" aparece são ${amount}.`
); */

/* // Questão 6
function primeNumber(num) {
  if (num <= 0) return console.log('Por favor inserir número acima de 0');
  else if (num % 2 == 0) {
    console.log(`O número ${num} não é primo.`);
  } else console.log(`O número ${num} é primo.`);
}

primeNumber(21); */

/* //Questão 7
function isPrimeNumber(i) {
  for (let divisor = 2; divisor < i; divisor++)
    if (i % divisor == 0) return false;
  return true;
}

for (let i = 1; i < 100; i++) if (isPrimeNumber(i)) console.log(i); */

/* //Questão 8
function sumNumber(numberOne, numberTwo) {
  if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
    const result = numberOne + numberTwo;
    return console.log(`O valor total é ${result}.`);
  } else console.log('Por favor inserir um número válido!');
}

sumNumber(10, 20); */

/* //Questão 10
let firstNumber = 10;
let LastNumber = 20;

function isPrimeNumber(firstNumber) {
  for (let divisor = 2; divisor < firstNumber; divisor++)
    if (firstNumber % divisor == 0) return false;
  return true;
}

for (firstNumber; firstNumber < LastNumber; firstNumber++)
  if (isPrimeNumber(firstNumber)) console.log(firstNumber); */
