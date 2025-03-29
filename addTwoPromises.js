const addTwoPromises = async function (promise1, promise2) {
  const [num1, num2] = await Promise.all([promise1, promise2]);
  return num1 + num2;

//   return await Promise.all([promise1, promise2]).then(
//     ([num1, num2]) => num1 + num2
//   );
};

const exp1 = new Promise((resolve) => setTimeout(() => resolve(2), 50));
const exp2 = new Promise((resolve) => setTimeout(() => resolve(5), 30));

addTwoPromises(exp1, exp2).then(console.log);
