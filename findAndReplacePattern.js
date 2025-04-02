function findAndReplacePattern(words, pattern) {
  function normalize(word) {
    const map = new Map();
    let count = 0;
    const result = [];
    for (let char of word) {
      if (!map.has(char)) {
        map.set(char, count++);
      }
      result.push(map.get(char));
    }
    // exp: '0,0,1'
    console.log(result.join(","))
    return result.join(",");
  }
  const normalizePattern = normalize(pattern);
  return words.filter((word) => normalize(word) === normalizePattern);
}
// ['aab', 'kkl']
console.log(findAndReplacePattern(["aab", "abc", "eff", "kkl"], "eec"));
