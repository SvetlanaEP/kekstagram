import {picturesOtherUsers} from './miniatures.js';

const miniaturesList = document.querySelectorAll('.picture');
const fullPost = document.querySelector('.big-picture');
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel');

const openFullPost = function (miniature, posts, picture) {
  const commentsContainer = document.querySelector('.social__comments');
  const commentTemplate = commentsContainer.querySelector('.social__comment');

  miniature.addEventListener('click', () => {
    commentsContainer.querySelectorAll('.social__comment').forEach((comment) => {
      comment.remove();
    });
    document.querySelector('body').classList.add('modal-open');
    picture.querySelector('.comments-loader').classList.add('hidden'); //Временно скрыта кнопка "загрузить еще" в блоке комментариев
    picture.classList.remove('hidden');
    picture.querySelector('.big-picture__img').querySelector('img').src = posts.url;
    picture.querySelector('.social__picture').src = posts.ava;
    picture.querySelector('.social__caption').textContent = posts.description;
    picture.querySelector('.likes-count').textContent = posts.likes;

    const commentsPost = posts.comments.length;

    if (commentsPost < 5 && commentsPost >= 1) {
      picture.querySelector('.social__comment-count').textContent = `${commentsPost} из ${commentsPost} комментариев`;
    } else {
      if ( commentsPost >= 5) {
        picture.querySelector('.social__comment-count').textContent = `5 из ${commentsPost} комментариев`;
      } else {
        picture.querySelector('.social__comment-count').textContent = `Комментариев нет`;
      }
    }

    const commentsList = posts.comments;
    const commentsFragment = document.createDocumentFragment();

    commentsList.forEach(({avatar, message}) => {


      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = avatar;
      commentElement.querySelector('.social__text').textContent = message;
      commentsFragment.appendChild(commentElement);
    });
    commentsContainer.appendChild(commentsFragment);
  });
};

btnCloseFullPost.addEventListener('click', () => {
  fullPost.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    fullPost.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

for (let i=0; i < picturesOtherUsers.length; i++) {
  openFullPost(miniaturesList[i], picturesOtherUsers[i], fullPost);
}
