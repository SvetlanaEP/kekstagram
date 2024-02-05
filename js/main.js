const POSTS_COUNT = 25; //Количество постов
const COMMENTS_COUNT = 25 //Количество пользователей
const MIN_LIKES = 15
const MAX_LIKES = 200

const description = [
  '',
  'Хелло епта',
  'Всем хорошего дня',
  'Все препятствия и трудности – это ступени, по которым мы растём ввысь',
  'Ауф',
  'что за красотка среди этой массовки',

]

const comments = [
  '',
  'Женихи толпами бегают',
  'Вашей маме зять не нужен?',
  'А ваши родители случайно не кондитеры?',
  'Что за львица эта тигрица',
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const name = [
  'Corpuscle',
  'Mikhail',
  'P',
  'АБВГД',
  'Елизавета',
  'Алексей Казаков',
  'Артем Спутник',
  'Бахдан',
  'Ирина',
  'Женька',
  'Alexander Kuchumov',
  'Павел',
  'Wow wow',
  'ЖекаБот'
]

function getRandomPositiveInteger(min, max = 0) {
  if (min === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower

  return Math.floor(result);
}

function checkStringLength(text, length) {
  return text.length <= length;
}
// Получить случайный элемент из массива

function getArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)]
}

// Массив чисел перемешанный

function getArrayRandomNumbers(length) {
  // Массив с последовательными числами от 1
  const serialArray = Array.from({length: length}, (_, i) => i + 1)

  //Перемешивание массива
  return serialArray.map(i => [Math.random(), i]).sort().map(i => i[1])
}

function getSerialElement(array, i) {
  return array[i]
}

function add0forNumber (array, i) {
  if (array[i] <= 9) {
      return '0' + array[i]
  } return array[i]
}

// массив с постами

function creatArrayPosts(postsCount, commentsCount) {
  const arrayPost = Array.from({length: postsCount})

  for (let i=0; i <= arrayPost.length-1; i++) {
    arrayPost[i] = {
      id: getSerialElement(getArrayRandomNumbers(postsCount), i),
      url: 'photos/' + add0forNumber(getArrayRandomNumbers(postsCount), i) + '.jpg',
      description: getArrayElement(description),
      likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
      comments: {
        id: getSerialElement(getArrayRandomNumbers(commentsCount), i),
        avatar: 'img/avatar-' + getRandomPositiveInteger(1,6),
        message: getArrayElement(comments),
        name: getArrayElement(name)
      }
    }
  }
  return arrayPost
}

console.log(creatArrayPosts(POSTS_COUNT, COMMENTS_COUNT))

//const severalPhotos = Array.from({length: USER_PHOTOS_COUNT}, photoUser(USER_PHOTOS_COUNT, post)

//console.log(severalPhotos)
