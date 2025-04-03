function maxRepeating(sequence, word) {
  let k = 0;
  while (sequence.includes(word.repeat(k + 1))) {
    k++;
  }
  return k;
}
console.log(maxRepeating("ababac", "ab"));
