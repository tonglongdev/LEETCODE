function partitionLabels(str) {
  const lastOccurence = {};
  const partitions = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {
    lastOccurence[str[i]] = i;
  }

  for (let i = 0; i < str.length; i++) {
    end = Math.max(end, lastOccurence[str[i]]);
    if (i === end) {
      partitions.push(i - start + 1);
      start = i + 1;
    }
  }
  return partitions;
}

console.log(partitionLabels("aabcbd"));
