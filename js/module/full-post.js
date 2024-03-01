import {picturesOtherUsers} from './miniatures.js';

const miniaturesList = document.querySelectorAll('.picture');
const fullPost = document.querySelector('.big-picture');
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel');

const openFullPost = function (miniature, posts, picture) {
  miniature.addEventListener('click', () => {
    picture.classList.remove('hidden');
    picture.querySelector('.big-picture__img').querySelector('img').src = posts.url;
    picture.querySelector('.social__picture').src = posts.ava;
    picture.querySelector('.social__caption').textContent = posts.description;
    picture.querySelector('.likes-count').textContent = posts.likes;
  });
};

btnCloseFullPost.addEventListener('click', () => {
  fullPost.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    fullPost.classList.add('hidden');
  }
});

for (let i=0; i < picturesOtherUsers.length; i++) {
  openFullPost(miniaturesList[i], picturesOtherUsers[i], fullPost);
}
