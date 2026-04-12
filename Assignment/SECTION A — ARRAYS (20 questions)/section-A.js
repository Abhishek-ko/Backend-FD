
// /*1. Print each element (basic iteration) */
// const arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// /* 2. Sum of array (accumulator)*/
// const arr = [1, 2, 3, 4];

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }

// console.log(total);
// /*3. Maximum value without Math.max*/
// const arr = [5, 1, 9, 3];

// let max = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);
// /*4. Minimum value with reduce */
// const arr = [7, 3, 9, 0];

// const min = arr.reduce((min, v) => {
//   return v < min ? v : min;
// }, Infinity);

// console.log(min);
// /* 5. Reverse an array (manual)*/
// const arr = [1, 2, 3];

// const reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);
// /* 6. Remove duplicates (preserve order) */
// const arr = [1, 2, 2, 3, 1];

// const seen = {};
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];

//   if (!seen[val]) {
//     seen[val] = true;
//     result.push(val);
//   }
// }

// console.log(result);
// /* 7. Count element frequency (generic)*/
// const arr = ['a', 'b', 'a', 'c'];

// const freq = {};

// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];

//   if (freq[val]) {
//     freq[val]++;
//   } else {
//     freq[val] = 1;
//   }
// }

// console.log(freq);
// /* 8. Flatten 1-level nested array*/
// const arr = [1, [2, 3], 4];

// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];

//   if (Array.isArray(val)) {
//     for (let j = 0; j < val.length; j++) {
//       result.push(val[j]);
//     }
//   } else {
//     result.push(val);
//   }
// }

// console.log(result);

// /*9. Rotate array by k steps (right) */
// const arr = [1, 2, 3, 4];
// let k = 1;

// const n = arr.length;
// k = k % n; // normalize

// const result = [
//   ...arr.slice(n - k),
//   ...arr.slice(0, n - k)
// ];

// console.log(result);

// /* 10. Chunk array into size n */
// const arr = [1, 2, 3, 4, 5];
// const n = 2;

// const result = [];

// for (let i = 0; i < arr.length; i += n) {
//   result.push(arr.slice(i, i + n));
// }

// console.log(result);

// /* 11. Remove falsy values*/
// const arr = [0, 1, false, 2, '', 3, null];

// const result = arr.filter(Boolean);

// console.log(result);

// /*12. Find index of first occurrence (manual) */
// function indexOfManual(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(indexOfManual(['a', 'b', 'c'], 'b'));

// /* 13. Merge two arrays immutably*/
// const a = [1, 2];
// const b = [3, 4];

// const result = [...a, ...b];

// console.log(result);

// /* 14. Interleave two arrays*/
// function interleave(arr1, arr2) {
//   const result = [];
//   const maxLen = Math.max(arr1.length, arr2.length);

//   for (let i = 0; i < maxLen; i++) {
//     if (i < arr1.length) {
//       result.push(arr1[i]);
//     }
//     if (i < arr2.length) {
//       result.push(arr2[i]);
//     }
//   }

//   return result;
// }

// console.log(interleave([1, 2], [10, 20]));

// /*15. Sliding window sums (window size k) */
// function slidingWindowSum(arr, k) {
//   const result = [];

//   if (k > arr.length) return result;
//   let windowSum = 0;
//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }
//   result.push(windowSum);
//   for (let i = k; i < arr.length; i++) {
//     windowSum = windowSum + arr[i] - arr[i - k];
//     result.push(windowSum);
//   }
//   return result;
// }
// console.log(slidingWindowSum([1, 2, 3, 4], 2));

// /*16. Create range array (inclusive) */
// function createRange(start, end) {
//   if (start > end) return []; 

//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(createRange(3, 6));

// /*17. Remove item at index immutably */
// const arr = [1, 2, 3];
// const i = 1;

// const result = [
//   ...arr.slice(0, i),
//   ...arr.slice(i + 1)
// ];

// console.log(result);

// /*18. Count elements matching predicate */
// function countBy(arr, predicate) {
//   return arr.filter(predicate).length;
// }
// const arr = [5, 12, 8, 20];
// const result = countBy(arr, x => x > 10);

// console.log(result);

// /* 19. Unique sorted array*/
// const arr = [3, 1, 2, 3, 2];
// const result = [...new Set(arr)].sort((a, b) => a - b);
// console.log(result);

// /* 20. Map indices to values (index map)*/
// const arr = ['a', 'b'];

// const result = {};

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

