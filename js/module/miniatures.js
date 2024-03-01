import {createPosts} from './data.js';

const MINIATURES_COUNT = 25;
const picturesOtherUsersContainers = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesOtherUsers = createPosts(MINIATURES_COUNT);

const miniaturesListFragment = document.createDocumentFragment();

picturesOtherUsers.forEach(({url, likes, comments}) => {
  const miniatureElement = miniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;
  miniaturesListFragment.appendChild(miniatureElement);
});

picturesOtherUsersContainers.appendChild(miniaturesListFragment);
