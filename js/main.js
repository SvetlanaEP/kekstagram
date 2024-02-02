function getRandomNumber(min, max = 0) {
  if (min === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

console.log(getRandomNumber(1, 10));

function checkMaxLength(text, length) {
  return text.length <= length;
}

console.log(checkMaxLength('', 2))
