import {picturesOtherUsers} from './miniatures.js';
import {showComments} from "./comments.js";

const miniaturesList = document.querySelectorAll('.picture');
const fullPost = document.querySelector('.big-picture');
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel');

function openFullPost(miniature, posts, picture) {

  miniature.addEventListener('click', () => {

    document.querySelector('body').classList.add('modal-open');
    picture.classList.remove('hidden');
    picture.querySelector('.big-picture__img').querySelector('img').src = posts.url;
    picture.querySelector('.social__picture').src = posts.ava;
    picture.querySelector('.social__caption').textContent = posts.description;
    picture.querySelector('.likes-count').textContent = posts.likes;

    showComments(picture, posts)
  });
}

btnCloseFullPost.addEventListener('click', () => {
  fullPost.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    fullPost.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

for (let i=0; i < picturesOtherUsers.length; i++) {
  openFullPost(miniaturesList[i], picturesOtherUsers[i], fullPost);
}
