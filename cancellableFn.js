function cancellable(generator) {
  let cancel;
  const cancelledPromise = new Promise((_, reject) => {
    cancel = () => reject("CANCELLED");
  });
  const promise = (async () => {
    let next = generator.next();
    while (!next.done) {
      try {
        const result = await Promise.race([next.value, cancelledPromise]);
        next = generator.next(result);
      } catch (error) {
        next = generator.throw(error);
      }
    }
    return next.value;
  })();
  return [cancel, promise];
}

function* greeting() {
  yield new Promise((resolve) => setTimeout(() => resolve("hello 1"), 2000));
  yield new Promise((resolve) => setTimeout(() => resolve("hello 2"), 2000));
  return "Hello all done";
}

const [cancel, promise] = cancellable(greeting());

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(`Status: ${error}`));

setTimeout(() => cancel(), 3000);
