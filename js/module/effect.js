const sliderEffect = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');

const effectList = document.querySelector('#effect-chrome')
console.log(effectList)

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    name: 'chrome',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
]

noUiSlider.create(sliderEffect, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower'
});

const upDateSlider = () => {
  sliderEffect.noUiSlider.on('update', (...rest) => {
    effectLevel.value = sliderEffect.noUiSlider.get();
    image.style.filter = `grayscale(${sliderEffect.noUiSlider.get()})`
  })
}

const onChrome = () => {
  sliderEffect.noUiSlider.updateOptions({
    range: {
      min: EFFECTS[1].min,
      max: EFFECTS[1].max,
    },
    start: EFFECTS[1].max,
    step: EFFECTS[1].step
  })
  upDateSlider()
}

effectList.addEventListener('change', onChrome)


