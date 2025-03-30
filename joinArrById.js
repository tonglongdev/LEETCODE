function joinArrays(arr1, arr2) {
  const map = new Map();
  function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  for (let obj of arr1) {
    map.set(obj.id, obj);
  }
  for (let obj of arr2) {
    if (map.has(obj.id)) {
      map.set(obj.id, mergeObjects(map.get(obj.id), obj));
    } else {
      map.set(obj.id, obj);
    }
  }
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}
const exp1 = [
  {
    id: 1,
    name: "Long",
  },
  {
    id: 2,
    name: "Long2",
  },
];
const exp2 = [
  {
    id: 1,
    age: 23,
  },
  {
    id: 2,
    age: 25,
  },
];
console.log(joinArrays(exp1, exp2));
