const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const fileField = form.querySelector('#upload-file');
const canselBtn = overlay.querySelector('#upload-cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const hashtagExample = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/

const MAX_HASHTAGS_COUNT = 5;

const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});


//Функция открытия модального окна

function showModal () {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
}

// Функция закрытия модального окна

function hideModal() {
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown)
}

//Проверка фокуса на полях ввода текста

function isTextFieldFocus() {
 return document.activeElement === hashtagField || document.activeElement === commentField;
}

//Проверка, что нажата Esc

function onEscKeyDown (evt) {
  if (evt.key === 'Escape' && !isTextFieldFocus()) {
    evt.preventDefault();
    hideModal();
  }
}

function onCancelBtnClick() {
  hideModal()
}

function onFileInputChange() {
  showModal()
}

function validateTags() {
  if (hashtagField.value === '') {
    return true
  } else {
    const tagsList = hashtagField.value.trim().split(' ')

    let result

    for (let i=0; i<tagsList.length; i++) {
      result = true

      if (!hashtagExample.test(tagsList[i])) {

        result = false
        break
      }
    }

    return result
  }
}

function validateTagsCount() {
  return  hashtagField.value.trim().split(' ').length <= MAX_HASHTAGS_COUNT;
}

pristine.addValidator(
  hashtagField,
  validateTagsCount,
  'Максимальное количество хештегов - 5!'
)

pristine.addValidator(
  hashtagField,
  validateTags,
  'Введён некорретный хештег!');

function onFormSubmit(evt) {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('форма норм')
  } else {
    console.log('форма не норм')
  }
}

fileField.addEventListener('change', onFileInputChange);
canselBtn.addEventListener('click', onCancelBtnClick);
form.addEventListener('submit', onFormSubmit)
