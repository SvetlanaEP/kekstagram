import {picturesOtherUsers} from './miniatures.js';
import {displayComments, moreCommentsBtn, showMore} from "./comments.js";

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

    displayComments(picture, posts)

 //   const allCom = posts.comment
    moreCommentsBtn.addEventListener('click', showMore);
  })
}
/*
function showMore() {
console.log('кнопка ')
console.log()
/*comments.length - endShowComment <= 5 ) {
   moreCommentsBtn.classList.add('hidden')
   endShowComment = comments.length
   indexNextComment = indexNextComment + 5
 } else {
   indexNextComment = indexNextComment + 5
   endShowComment = endShowComment + 5
 }
 console.log(indexNextComment, endShowComment)
const showCommentsList = comments.slice(indexNextComment, endShowComment)

 console.log(showCommentsList)


} */

function hideFullPost() {
  fullPost.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  moreCommentsBtn.removeEventListener('click', () => {
    showMore()
  })
}

btnCloseFullPost.addEventListener('click', hideFullPost);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideFullPost();
  }
});

for (let i=0; i < picturesOtherUsers.length; i++) {
  openFullPost(miniaturesList[i], picturesOtherUsers[i], fullPost);
}
