const fullPost = document.querySelector('.big-picture'); //нашла на странице фулл пост
const btnCloseFullPost = fullPost.querySelector('.big-picture__cancel'); //нашла на странице

const closeFullPost = () => {
  fullPost.classList.add('hidden')
}

const openFullPost = (miniature) => {
  document.querySelector('body').classList.add('modal-open');
  fullPost.classList.remove('hidden')


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
