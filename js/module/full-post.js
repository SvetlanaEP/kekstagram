import {picturesOtherUsers} from './miniatures.js';

const miniaturesList = document.querySelectorAll('.picture');
const fullPost = document.querySelector('.big-picture');
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel');

const openFullPost = function (miniature, posts, picture) {
  miniature.addEventListener('click', () => {
    picture.classList.remove('hidden');
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
