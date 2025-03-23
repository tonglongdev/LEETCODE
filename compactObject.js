function compactObject(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  } else if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (let key in obj) {
      if (Boolean(obj[key])) {
        result[key] = compactObject(obj[key]);
      }
    }
    return result;
  } else {
    return obj;
  }
}

const arrExp = [[null, 0, 5, [0], [false, 16]]];

const objExp = {
  user: { name: "Alice", age: 0, email: null },
  active: false,
  roles: ["admin", "", null],
};

console.log(compactObject(objExp));
