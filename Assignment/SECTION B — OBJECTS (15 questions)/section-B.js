// /*21. List keys and values (iteration) */
// const obj = { name: 'Aman', age: 22 };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// /* 22. Add / update property immutably*/
// const obj = { name: 'Aman' };
// const newObj = { ...obj, role: 'admin' };
// console.log(newObj);

// /* 23. Delete property immutably*/
// const user = { name: 'A', password: 'x' };
// const { password, ...safeUser } = user;
// console.log(safeUser);

// /* 24. Merge two objects (shallow vs deep)*/
// const a = { x: 1 };
// const b = { y: 2 };
// const merged = { ...a, ...b };
// console.log(merged);

// /*25. Convert keys ↔ values (invert object) */
// const obj = { a: 1, b: 2 };
// const inverted = Object.entries(obj).reduce((acc, [key, value]) => {
//   acc[value] = key;
//   return acc;
// }, {});
// console.log(inverted);

// /* 26. Deep clone simple object (no functions)*/
// const obj = { a: { b: 2 } };
// const deepClone = JSON.parse(JSON.stringify(obj));
// deepClone.a.b = 99;
// console.log(obj.a.b);      
// console.log(deepClone.a.b); 

// /*27. Count properties (keys) */
// const obj = { a: 1, b: 2 };
// const count = Object.keys(obj).length;
// console.log(count);

// /* 28. Default values using destructuring*/
// const user = { name: 'A' };
// const { name, role = 'user' } = user;
// console.log(name, role);

// /* 29. Pick subset of properties (pick)*/
// const obj = { id: 1, name: 'A', email: 'a@x' };
// const keys = ['id', 'email'];
// const picked = keys.reduce((acc, key) => {
//   if (key in obj) {
//     acc[key] = obj[key];
//   }
//   return acc;
// }, {});
// console.log(picked);

// /*30. Omit properties (opposite of pick) */
// const user = { user: 'A', password: 'x' };
// const { password, ...safeUser } = user;
// console.log(safeUser);
// /*31. Merge nested objects immutably (one-level */
// const user = {
//   name: 'A',
//   address: { city: 'Old', zip: 123 }
// };
// const updatedUser = {
//   ...user,
//   address: {
//     ...user.address,
//     city: 'New'
//   }
// };
// console.log(updatedUser);

// /* 32. Rename a key in object immutably*/
// const obj = { fullName: 'A', age: 20 };
// const { fullName, ...rest } = obj;
// const newObj = {
//   name: fullName,
//   ...rest
// };
// console.log(newObj);
// /*33. Merge defaults with provided config */
// const defaults = { retries: 3 };
// const config = { timeout: 100 };
// const finalConfig = { ...defaults, ...config };
// console.log(finalConfig);

// /* 34. Check if object is empty*/
// const obj = {};
// const isEmpty = Object.keys(obj).length === 0;
// console.log(isEmpty);
