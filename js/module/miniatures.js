import {openFullPost} from "./full-post.js";

const picturesOtherUsersContainers = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const rendersPicturesList = (picturesOtherUsers) => {
  const randomPicturesList = picturesOtherUsers.map(i => [Math.random(), i]).sort().map(i => i[1])
  randomPicturesList.forEach(({url, likes, comments}) => {

    const miniaturesListFragment = document.createDocumentFragment();

    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;
    miniaturesListFragment.appendChild(miniatureElement);

    miniatureElement.addEventListener('click', () => {
      openFullPost(miniatureElement)
    })

    picturesOtherUsersContainers.appendChild(miniaturesListFragment);

  });

  return randomPicturesList
}


export {rendersPicturesList};
