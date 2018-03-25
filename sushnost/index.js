function printMessage(elementId, format, message) {
  document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
}

printMessage('msg', 'h1', 'Hello, world');

console.log('========Возведение в квадрать императивный способ========');

var array = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];

for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}
console.log(array);
console.log('========Возведение в квадрать декларативный способ========');


let numberTwo = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
].map(function (num) {
  return Math.pow(num,2)
});
console.log(numberTwo);
//printMessage('msg', 'h1', numberTwo);

console.log('========Возведение в квадрать декларативный способ стрелочная функция========');
let numberTwoNext = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
].map(num => Math.pow(num,2));
console.log(numberTwoNext);
//printMessage('msg', 'h1', numberTwo);