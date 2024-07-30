const fullPost = document.querySelector('.big-picture');
const moreCommentsBtn =  fullPost.querySelector('.comments-loader');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');

let item = 0

let showCommentCount = 5

//Отображение блока с комментариями

function displayComments (comments) {
  commentsContainer.querySelectorAll('.social__comment').forEach((comment) => {
    comment.remove();
  });
  item = 0
  let showCommentsList = 0

  if (comments.length === 0) {
    moreCommentsBtn.classList.add('hidden')
    fullPost.querySelector('.social__comment-count').textContent = `Комментариев нет`;
  } else {
    if (comments.length <= 5 && comments.length >= 1) {    //Если комментариев от 1 до 5
      moreCommentsBtn.classList.add('hidden')
      fullPost.querySelector('.social__comment-count').textContent = `${comments.length} из ${comments.length} комментариев`;

      showCommentsList = comments
    } else {
        moreCommentsBtn.classList.remove('hidden')    // Если комментариев больше 5
        fullPost.querySelector('.social__comment-count').textContent = ` ${showCommentCount} из ${comments.length} комментариев`;
        showCommentsList = comments
      }
      const commentsFragment = document.createDocumentFragment();

      showCommentsList.forEach(({avatar, message}) => {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = avatar;
        commentElement.querySelector('.social__text').textContent = message;
        commentsFragment.appendChild(commentElement);
      })
      commentsContainer.appendChild(commentsFragment);

      const AllComments = commentsContainer.querySelectorAll('.social__comment')

      if (AllComments.length > 5) {

        for (let i = 5; i < AllComments.length; i++) {
          AllComments[i].classList.add('hidden')
        }
      }
    }
 moreCommentsBtn.addEventListener('click', () => {
   showMore()
  })
}


// Кнопка показать больше

function showMore() {
  const hiddenComments = commentsContainer.querySelectorAll('.social__comments .hidden')
  const allComments = commentsContainer.querySelectorAll('.social__comment')

  const openComments = allComments.length - hiddenComments.length

  const openCommentsCount = fullPost.querySelector('.social__comment-count')

  console.log(hiddenComments.length)

  if (hiddenComments.length > 5) {

    for (let i = 0; i < 5; i++) {
      hiddenComments[i].classList.remove('hidden')
    }
    openCommentsCount.textContent = ` ${openComments + 5} из ${allComments.length} комментариев`;
  } else {

    for (let i = 0; i < hiddenComments.length; i++) {
      hiddenComments[i].classList.remove('hidden')
    }
    moreCommentsBtn.classList.add('hidden')
    openCommentsCount.textContent = ` ${allComments.length} из ${allComments.length} комментариев`;
  }
}

export {displayComments, moreCommentsBtn};
