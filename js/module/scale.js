const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;
const DEFAULT_SCALE = 100;

const currentScale = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`
}

const resetScale = () => {
  currentScale()
}

const onSmallerBtnClick = () => {
  const newScale = parseInt(scaleInput.value, 10) - STEP_SCALE;

  if (newScale <= MIN_SCALE) {
    currentScale(MIN_SCALE)
  } else {
    currentScale(newScale)
  }
}

const onBiggerBtnClick = () => {
  const newScale = parseInt(scaleInput.value, 10) + STEP_SCALE;

  if (newScale >= MAX_SCALE) {
    currentScale(MAX_SCALE)
  } else {
    currentScale(newScale)
  }
}

smallerBtn.addEventListener('click', onSmallerBtnClick)

biggerBtn.addEventListener('click', onBiggerBtnClick)

export {resetScale}
