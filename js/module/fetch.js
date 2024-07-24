import {rendersPicturesList} from "./miniatures.js";

fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((picturesList) => {
    rendersPicturesList(picturesList)
  })

