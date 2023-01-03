function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(1, 7)

function checkStringLength(comment, maxStringLength) {
  if (comment.length <= maxStringLength) {
    console.log ('ок')
    return true
  }
  console.log('не ок')
  return false
}

checkStringLength('', 3)
