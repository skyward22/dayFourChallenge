// Starting array
let array = [28, 43, -22, 30, 4, 0, 12];

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      }
    }
  }
}

console.log(value);
