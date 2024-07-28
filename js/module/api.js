import {rendersPicturesList} from "./miniatures.js";

import {setUserFormSubmit} from "./form.js";
import {onCancelBtnClick} from "./form.js";

fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((picturesList) => {
    rendersPicturesList(picturesList)
  })

setUserFormSubmit(onCancelBtnClick)
