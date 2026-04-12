/*1. Print each element (basic iteration) */
const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/* 2. Sum of array (accumulator)*/
const arr = [1, 2, 3, 4];

let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

console.log(total);
/*3. Maximum value without Math.max*/
const arr = [5, 1, 9, 3];

let max = arr[0]; 

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
/*4. Minimum value with reduce */
const arr = [7, 3, 9, 0];

const min = arr.reduce((min, v) => {
  return v < min ? v : min;
}, Infinity);

console.log(min);
/* 5. Reverse an array (manual)*/
const arr = [1, 2, 3];

const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed);
/* 6. Remove duplicates (preserve order) */
const arr = [1, 2, 2, 3, 1];

const seen = {};
const result = [];

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];

  if (!seen[val]) {
    seen[val] = true;
    result.push(val);
  }
}

console.log(result);
/* 7. Count element frequency (generic)*/
const arr = ['a', 'b', 'a', 'c'];

const freq = {};

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];

  if (freq[val]) {
    freq[val]++;
  } else {
    freq[val] = 1;
  }
}

console.log(freq);
/* 8. Flatten 1-level nested array*/
const arr = [1, [2, 3], 4];

const result = [];

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];

  if (Array.isArray(val)) {
    for (let j = 0; j < val.length; j++) {
      result.push(val[j]);
    }
  } else {
    result.push(val);
  }
}

console.log(result);