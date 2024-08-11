import {openFullPost} from "./full-post.js";
import {displayComments} from "./comments.js";

const picturesOtherUsersContainers = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const sortingBlock = document.querySelector('.img-filters')
const sortButtons = sortingBlock.querySelectorAll('.img-filters__button')
const defaultButton = sortingBlock.querySelector('#filter-default')
const randomButton = sortingBlock.querySelector('#filter-random')
const discussedButton = sortingBlock.querySelector('#filter-discussed')

const rendersPicturesList = (picturesOtherUsers) => {
  const miniaturesListFragment = document.createDocumentFragment();

  picturesOtherUsers.forEach(({url, likes, comments}) => {

    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    miniatureElement.addEventListener('click', () => {
      openFullPost(miniatureElement)
      displayComments(comments)
    })

    miniaturesListFragment.appendChild(miniatureElement);
  });


  while (picturesOtherUsersContainers.querySelector('.picture')) {
    picturesOtherUsersContainers.querySelector('.picture').remove()
  }

  picturesOtherUsersContainers.appendChild(miniaturesListFragment);

  sortingBlock.classList.remove('img-filters--inactive')
}

const setSortClick = (date) => {
  let photosList

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {

      sortingBlock.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active')
      button.classList.add('img-filters__button--active')

      if (button === defaultButton) {
        rendersPicturesList(date)
      }
      if (button === randomButton) {
        photosList = date.map(i => [Math.random(), i]).sort().map(i => i[1])
        rendersPicturesList(photosList)
      }
      if (button === discussedButton) {
      }
    })
  })

}

export {rendersPicturesList, setSortClick};
