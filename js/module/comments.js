const fullPost = document.querySelector('.big-picture');
const moreCommentsBtn =  fullPost.querySelector('.comments-loader');

function showComments(picture, posts) {
  const commentsContainer = document.querySelector('.social__comments');
  const commentTemplate = commentsContainer.querySelector('.social__comment');

  commentsContainer.querySelectorAll('.social__comment').forEach((comment) => {
    comment.remove();
  });

  const commentsPost = posts.comments.length;

  if (commentsPost <= 5 && commentsPost >= 1) {
    moreCommentsBtn.classList.add('hidden')
    picture.querySelector('.social__comment-count').textContent = `${commentsPost} из ${commentsPost} комментариев`;
  } else {
    if ( commentsPost > 5) {
      picture.querySelector('.social__comment-count').textContent = `5 из ${commentsPost} комментариев`;
    } else {
      moreCommentsBtn.classList.add('hidden')
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

}

export {showComments};
