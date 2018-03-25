function printMessage(elementId, format, message) {
  document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
}

printMessage('msg', 'h1', 'Hello, world');

console.log('========Возведение в квадрать========');

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