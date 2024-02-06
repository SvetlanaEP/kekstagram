const POSTS_COUNT = 25; //Количество постов

const description = [
  '',
  'Хелло епта',
  'Всем хорошего дня',
  'Все препятствия и трудности – это ступени, по которым мы растём ввысь',
  'Ауф',
  'что за красотка среди этой массовки',
  'Скорей бы понедельник и снова на работу',
  'Понедельник-пятница работаем',
  'мяу мяу мяу мяу',
  'Я вам запрещаю отдыхать',
  'Почему каждый год люди пропадают на огородах?',
  'Все говорят, картошка осенью 9 рублей, а ты вскопай огород',
  'ты же мужик, работай',
  'Кто прочитал, тот на работу',
  'капец жмыхнуло',
  'Доброе утро, пирожочек. Чисти зубки и на завод',
  'А что, мужики? Что мы начальника подведем?',
  'Зарплата 25 тыщ это реально',
]

const comments = [
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

const names = [
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

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)]
}

// Массив чисел перемешанный

function shuffleArray(length) {
  // Массив с последовательными числами от 1
  const serialArray = Array.from({length: length}, (_, i) => i + 1)

  //Перемешивание массива
  return serialArray.map(i => [Math.random(), i]).sort().map(i => i[1])
}

// Создание текста комментария

function creatMessage() {
  return Array.from({length: getRandomPositiveInteger(1, 2)}, () =>
  getRandomArrayElement(comments)).join(' ')
}

//Создание комментария

function creatComment(index) {
  return {
    id: index,
    avatar: 'img/avatar-' + getRandomPositiveInteger(1,6) + '.svg',
    message: creatMessage(),
    name: getRandomArrayElement(names)
  }
}

// массив с постами

function creatArrayPosts(postsCount) {
  const arrayPost = Array.from({length: postsCount})
  const sequenceId = shuffleArray(postsCount)

  for (let i=0; i <= arrayPost.length-1; i++) {
    arrayPost[i] = {
      id: sequenceId[i],
      url: 'photos/' + sequenceId[i] + '.jpg',
      description: getRandomArrayElement(description),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: getRandomPositiveInteger(1, 6)},
        (_, commentIndex) => creatComment(commentIndex + 1))
    }
  }
  return arrayPost
}

console.log(creatArrayPosts(POSTS_COUNT))

//const severalPhotos = Array.from({length: USER_PHOTOS_COUNT}, photoUser(USER_PHOTOS_COUNT, post)

//console.log(severalPhotos)
