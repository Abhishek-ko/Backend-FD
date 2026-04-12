// /*35. Total spending per user (aggregate) */
// const orders = [
//   { id:1, userId:1, total:500, status:"completed" },
//   { id:2, userId:2, total:300, status:"pending" },
//   { id:3, userId:1, total:200, status:"completed" },
//   { id:4, userId:3, total:700, status:"completed" }
// ];

// const totalSpent = orders.reduce((acc, order) => {
//   const userId = order.userId;

//   acc[userId] = (acc[userId] || 0) + order.total;

//   return acc;
// }, {});
// console.log(totalSpent);

// /*36. Completed orders only (filter) */
// const completedOrders = orders.filter(order => {
//   return order.status === "completed";
// });

// console.log(completedOrders);

// /*37. Join user info into orders (LEFT JOIN) */
// const users = [
//   { id:1, name:"Aman", age:22, isActive:true },
//   { id:2, name:"Riya", age:17, isActive:false },
//   { id:3, name:"Rahul", age:25, isActive:true },
//   { id:4, name:"Neha", age:19, isActive:false }
// ];
// const orders = [
//   { id:1, userId:1, total:500, status:"completed" },
//   { id:2, userId:2, total:300, status:"pending" },
//   { id:3, userId:1, total:200, status:"completed" },
//   { id:4, userId:3, total:700, status:"completed" }
// ];
// const userById = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});
// const result = orders.map(order => {
//   const user = userById[order.userId];
//   return {
//     ...order,
//     userName: user ? user.name : null
//   };
// });
// console.log(result);

// /* 38. Orders grouped by userId*/
// const grouped = orders.reduce((acc, order) => {
//   const key = order.userId;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(order);
//   return acc;
// }, {});
// console.log(grouped);

// /*39. Top N orders by total */
// const N = 2;
// const topOrders = [...orders] 
//   .sort((a, b) => b.total - a.total)
//   .slice(0, N);
// console.log(topOrders);

// /*40. Average order total per user */
// const stats = orders.reduce((acc, o) => {
//   const uid = o.userId;
//   if (!acc[uid]) {
//     acc[uid] = { sum: 0, count: 0 };
//   }
//   acc[uid].sum += o.total;
//   acc[uid].count += 1;
//   return acc;
// }, {});

// /*41. Users who placed at least one order (unique)*/
// const userIds = new Set(orders.map(o => o.userId));
// const result = users
//   .filter(u => userIds.has(u.id))
//   .map(u => u.name);
// console.log(result);

// /*42. Users with NO orders (anti-join) */
// const userIds = new Set(orders.map(o => o.userId));
// const result = users
//   .filter(u => !userIds.has(u.id))
//   .map(u => u.name);
// console.log(result);

// /* 43. Paginate results (page, limit)*/
// function paginate(orders, page, limit) {
//   const totalItems = orders.length;
//   const totalPages = Math.ceil(totalItems / limit);
//   const start = (page - 1) * limit;
//   const end = start + limit;
//   const data = orders.slice(start, end);
//   return {
//     page,
//     totalPages,
//     data
//   };
// }
// console.log(paginate(orders, 1, 2));

// /*44. Search users by name (case-insensitive)*/
// function searchUsers(users, query) {
//   return users.filter(u =>
//     u.name.toLowerCase().includes(query.toLowerCase())
//   );
// }
// console.log(searchUsers(users, "am").map(u => u.name));

// /*45. Count orders by status */
// const statusCount = orders.reduce((acc, o) => {
//   acc[o.status] = (acc[o.status] || 0) + 1;
//   return acc;
// }, {});
// console.log(statusCount);

// /*46. Update order status immutably (PATCH pattern) */
// function updateOrderStatus(orders, orderId, newStatus) {
//   return orders.map(order => {
//     if (order.id === orderId) {
//       return { ...order, status: newStatus };
//     }
//     return order;
//   });
// }
// const updated = updateOrderStatus(orders, 2, "completed");
// console.log(updated);

// /*47. Soft-delete pattern (mark deleted) */
// function softDeleteOrder(orders, orderId) {
//   return orders.map(order => {
//     if (order.id === orderId) {
//       return { ...order, deleted: true };
//     }
//     return order;
//   });
// }
// const result = softDeleteOrder(orders, 3);
// console.log(result);

// /*48. Merge datasets → user summary API */
// const ordersByUser = orders.reduce((acc, o) => {
//   const uid = o.userId;
//   if (!acc[uid]) {
//     acc[uid] = { totalOrders: 0, totalSpent: 0 };
//   }
//   acc[uid].totalOrders += 1;
//   acc[uid].totalSpent += o.total;
//   return acc;
// }, {});

// /* 49. Percent contribution per user (revenue share)*/
// const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
// const totalsByUser = orders.reduce((acc, o) => {
//   acc[o.userId] = (acc[o.userId] || 0) + o.total;
//   return acc;
// }, {});
// const percentByUser = Object.keys(totalsByUser).reduce((acc, uid) => {
//   const value = totalsByUser[uid];

//   acc[uid] = Number(((value / totalRevenue) * 100).toFixed(2));

//   return acc;
// }, {});

// console.log(percentByUser);

// /* 50. Transform orders → minimal DTO*/
// const dto = orders.map(o => ({
//   id: o.id,
//   total: o.total
// }));
// console.log(dto);

// /* 51. Add computed fields (tax + grand total)*/
// const updatedOrders = orders.map(o => {
//   const tax = +(o.total * 0.18).toFixed(2);
//   const grandTotal = +(o.total + tax).toFixed(2);
//   return {
//     ...o,
//     tax,
//     grandTotal
//   };
// });
// console.log(updatedOrders);

// /* 52. Bulk update (increase totals by 10% for completed orders)*/
// const updatedOrders = orders.map(o => {
//   if (o.status === "completed") {
//     const newTotal = +(o.total * 1.10).toFixed(2);
//     return {
//       ...o,
//       total: newTotal
//     };
//   }
//   return o;
// });
// console.log(updatedOrders);

// /*53. Validate payloads (find invalid orders)*/
// function findInvalidOrders(orders) {
//   return orders.filter(o => {
//     return (
//       o.id === undefined ||
//       o.userId === undefined ||
//       o.total === undefined
//     );
//   });
// }
// const testOrders = [
//   { id:1, userId:1, total:500 },
//   { id:5, total:100 }
// ];
// console.log(findInvalidOrders(testOrders));

// /* 54. Merge arrays (UPSERT logic)*/
// const map = {};
// orders.forEach(o => {
//   map[o.id] = o;
// });
// incomingOrders.forEach(o => {
//   map[o.id] = o;
// });

// const merged = Object.values(map).sort((a, b) => a.id - b.id);
// console.log(merged);

// /*55. Group users by activity status */
// const grouped = users.reduce((acc, user) => {
//   if (user.isActive) {
//     acc.active.push(user);
//   } else {
//     acc.inactive.push(user);
//   }
//   return acc;
// }, { active: [], inactive: [] });
// console.log(grouped);

// /*56. Multi-criteria filter (age + activity) */
// const result = users
//   .filter(u => u.isActive && u.age >= 18)
//   .map(u => u.name);
// console.log(result);

// /*57. Age histogram (bucketed analytics) */
// const histogram = users.reduce((acc, user) => {
//   const age = user.age;
//   if (age < 18) {
//     acc["<18"]++;
//   } else if (age <= 24) {
//     acc["18-24"]++;
//   } else {
//     acc["25+"]++;
//   }
//   return acc;
// }, { "<18": 0, "18-24": 0, "25+": 0 });
// console.log(histogram);

// /*58. Build lookup map (user cache) */
// const userById = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});
// console.log(userById);

// /*59. Top K users by spending */
// const totals = orders.reduce((acc, o) => {
//   acc[o.userId] = (acc[o.userId] || 0) + o.total;
//   return acc;
// }, {});

// const userById = Object.fromEntries(users.map(u => [u.id, u]));
// const k = 2;
// const topUsers = Object.entries(totals)
//   .sort((a, b) => b[1] - a[1]) 
//   .slice(0, k)
//   .map(([userId]) => userById[userId].name);
// console.log(topUsers);

// /*60. Distinct values (unique statuses) */
// const uniqueStatuses = [...new Set(orders.map(o => o.status))];
// console.log(uniqueStatuses);

// /*61. Normalize nested arrays (flatten products) */
// const orders = [
//   { id:1, products:[{ productId:5, qty:2 }] }
// ];
// const flat = orders.flatMap(order =>
//   order.products.map(p => ({
//     orderId: order.id,
//     productId: p.productId,
//     qty: p.qty
//   }))
// );
// console.log(flat);

// /*62. Lifetime Value (LTV) with weights */
// const weights = {
//   completed: 1.0,
//   pending: 0.5
// };
// const ltv = orders.reduce((acc, o) => {
//   const weight = weights[o.status] || 0;
//   acc[o.userId] = (acc[o.userId] || 0) + (o.total * weight);
//   return acc;
// }, {});
// console.log(ltv);

// /*63. Convert users → CSV string (export) */
// function toCSV(users) {
//   const header = "id,name";
//   const rows = users.map(u => `${u.id},${u.name}`);
//   return [header, ...rows].join("\n") + "\n";
// }
// console.log(toCSV(users));

// /*64. Merge user preferences (LEFT JOIN with defaults) */
// const preferences = [
//   { userId: 1, theme: "dark" }
// ];
// const prefByUserId = preferences.reduce((acc, p) => {
//   acc[p.userId] = p;
//   return acc;
// }, {});

// const defaultPref = { theme: "light" };
// const enrichedUsers = users.map(user => {
//   return {
//     ...user,
//     preferences: prefByUserId[user.id] || defaultPref
//   };
// });
// console.log(enrichedUsers);

// /* 65. Snapshot diff (detect changed users)*/
// function diffUsers(oldUsers, newUsers) {
//   const oldMap = Object.fromEntries(oldUsers.map(u => [u.id, u]));
//   const newMap = Object.fromEntries(newUsers.map(u => [u.id, u]));
//   const result = [];

//     for (let id in newMap) {
//     const oldUser = oldMap[id];
//     const newUser = newMap[id];
//     if (!oldUser) continue;
//     const changedFields = [];
//     for (let key in newUser) {
//       if (newUser[key] !== oldUser[key]) {
//         changedFields.push(key);
//       }
//     }
//     if (changedFields.length > 0) {
//       result.push({
//         id: Number(id),
//         changedFields
//       });
//     }
//   }
//   return result;
// }