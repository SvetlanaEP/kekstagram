import {setUserFormSubmit} from "./form.js";
import {onCancelBtnClick} from "./form.js";

//Получение данных с сервера
const getData = (onSuccess) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((picturesList) => {
      onSuccess(picturesList)
    })
}

// Отправка данных на сервер
const sendData = (onSuccess, onFail, body) => {
  setUserFormSubmit(onCancelBtnClick)
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess()
      } else {
        onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз')
      }
    } )
    .catch(() => {
      onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз')
    })
}

export {getData, sendData}

