function getRandomPositiveInteger(min, max) {
  if (min === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower

  return Math.floor(result);
}

function checkStringLength(text, length) {
  return text.length <= length;
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)]
}

export {getRandomPositiveInteger, getRandomArrayElement}
