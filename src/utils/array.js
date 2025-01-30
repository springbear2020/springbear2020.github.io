export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 随机生成一个 0 到 i 之间的索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换 array[i] 和 array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
