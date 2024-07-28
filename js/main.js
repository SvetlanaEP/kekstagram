import './module/scale.js'

import '../nouislider/nouislider.js'

import './module/effect.js'


import {rendersPicturesList} from "./module/miniatures.js";

import {getData} from "./module/api.js";

import {setUserFormSubmit} from "./module/form.js";

import {onCancelBtnClick} from "./module/form.js";

getData((picturesList) => {
  rendersPicturesList(picturesList)
})

setUserFormSubmit(onCancelBtnClick)
