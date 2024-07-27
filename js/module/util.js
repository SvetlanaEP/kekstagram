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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0'
  alertContainer.style.top = '0'
  alertContainer.style.right = '0'
  alertContainer.style.padding = '10px 3px'
  alertContainer.style.fontSize = '30px'
  alertContainer.style.textAlign = 'center'
  alertContainer.style.backgroundColor = 'red'

  alertContainer.textContent = message;
  document.body.append(alertContainer)

  setTimeout(() => {
    alertContainer.remove()
  }, 5000)
}

export {getRandomPositiveInteger, getRandomArrayElement, showAlert}
