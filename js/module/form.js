const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const fileField = form.querySelector('#upload-file');
const canselBtn = overlay.querySelector('#upload-cancel');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');


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

function onFormSubmit(evt) {
  evt.preventDefault();
}

fileField.addEventListener('change', onFileInputChange);
canselBtn.addEventListener('click', onCancelBtnClick);
form.addEventListener('submit', onFormSubmit)
