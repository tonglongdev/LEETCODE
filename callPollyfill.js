Function.prototype.callPollyFill = function (context, ...args) {
  context = context || globalThis;
  const uniqueKey = Symbol();
  // "this" right now is the one who call callPollyFill below => fn add()
  /*
  context = {
    a: 5;
    uniqueKey: function add(b) { return this.a + b };
  }
  */
  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);
  // "delete" function to avoid assign "this" permanently, and reduce memory
  delete context[uniqueKey];
  return result;
};

function add(b) {
  return this.a + b;
}
console.log(add.callPollyFill({ a: 5 }, 7));
