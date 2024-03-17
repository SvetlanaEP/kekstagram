const fullPost = document.querySelector('.big-picture');
const moreCommentsBtn =  fullPost.querySelector('.comments-loader');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');

let item = 0

let showCommentCount = 5

//Отображение блока с комментариями

function displayComments (picture, posts) {
  commentsContainer.querySelectorAll('.social__comment').forEach((comment) => {
    comment.remove();
  });
  let showCommentsList

  const commentsList = posts.comments;

  if (commentsList.length === 0) {
    moreCommentsBtn.classList.add('hidden')
    picture.querySelector('.social__comment-count').textContent = `Комментариев нет`;
  } else {
    if (commentsList.length <= 5 && commentsList.length >= 1) {
      moreCommentsBtn.classList.add('hidden')
      picture.querySelector('.social__comment-count').textContent = `${commentsList.length} из ${commentsList.length} комментариев`;
      showCommentsList = commentsList
    } else {
        moreCommentsBtn.classList.remove('hidden')
        picture.querySelector('.social__comment-count').textContent = ` ${showCommentCount} из ${commentsList.length} комментариев`;
        showCommentsList = commentsList
        //    showCommentsList = commentsList.slice(indexNextComment, endShowComment)
        //    const otherComments = commentsList.slice(endShowComment, commentsList.length)
      }
      const commentsFragment = document.createDocumentFragment();

      showCommentsList.forEach(({avatar, message}) => {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = avatar;
        commentElement.querySelector('.social__text').textContent = message;
        commentElement.classList.add('hidden')
        commentsFragment.appendChild(commentElement);
      })
      commentsContainer.appendChild(commentsFragment);

      const AllComments = commentsContainer.querySelectorAll('.social__comment')

      if (AllComments.length > 5) {
        item = 5
        for (let i = 0; i < item; i++) {
          AllComments[i].classList.remove('hidden')
        }
      } else {
        for (let i = 0; i < AllComments.length; i++) {
          AllComments[i].classList.remove('hidden')
        }
      }
    }
}

function showMore() {
  const AllComments = commentsContainer.querySelectorAll('.social__comment')
  const openCommentsCount = fullPost.querySelector('.social__comment-count')

  if (AllComments.length - item > item) {
    item += 5
    for (let i = 0; i < item; i++) {
      AllComments[i].classList.remove('hidden')
    }

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

export {displayComments, moreCommentsBtn, showMore};
