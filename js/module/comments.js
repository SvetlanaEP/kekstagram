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
   console.log('ghvg')
  })
}

function showMore() {
  const AllComments = commentsContainer.querySelectorAll('.social__comment')

  const openCommentsCount = fullPost.querySelector('.social__comment-count')

  let item2 = 0

  if (AllComments.length - 5 > 5) {

    for (let i = 5; i < item2 + 5; i++) {
      AllComments[i].classList.remove('hidden')
    }
    item += showCommentCount

  } else {
    item = AllComments.length
    for (let i = 0; i < item; i++) {
      AllComments[i].classList.remove('hidden')
    }
    item = AllComments.length
    moreCommentsBtn.classList.add('hidden')
  }
  openCommentsCount.textContent = ` ${item} из ${AllComments.length} комментариев`;
}

export {displayComments, moreCommentsBtn};
