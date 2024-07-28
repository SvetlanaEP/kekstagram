//import {showMore} from "./comments.js";

const fullPost = document.querySelector('.big-picture'); //нашла на странице фулл пост
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel'); //нашла на странице

const closeFullPost = () => {
  fullPost.classList.add('hidden')
}

const openFullPost = (miniature) => {
  document.querySelector('body').classList.add('modal-open');
  fullPost.classList.remove('hidden')

  fullPost.querySelector('.big-picture__img img').src = miniature.querySelector('.picture__img').src;
  fullPost.querySelector('.likes-count').textContent = miniature.querySelector('.picture__likes').textContent;

  btnCloseFullPost.addEventListener('click', () => {
    closeFullPost()
  })

}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullPost();
  }
});


export {openFullPost}
