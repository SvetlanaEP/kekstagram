import { getRandomPositiveInteger, getRandomArrayElement } from "./util.js";

const descriptions = [
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

// Массив чисел перемешанный

function shuffleArray(length) {
  // Массив с последовательными числами от 1
  const serialArray = Array.from({length: length}, (_, i) => i + 1)

  //Перемешивание массива
  return serialArray.map(i => [Math.random(), i]).sort().map(i => i[1])
}

// Создание текста комментария

function createMessage() {
  return Array.from({length: getRandomPositiveInteger(1, 2)}, () =>
    getRandomArrayElement(comments)).join(' ')
}

//Создание комментария

function createComment(index) {
  return {
    id: index,
    avatar: 'img/avatar-' + getRandomPositiveInteger(1,6) + '.svg',
    message: createMessage(),
    name: getRandomArrayElement(names)
  }
}

// массив с постами

function createPosts(POSTS_COUNT) {

  const arrayPost = Array.from({length: POSTS_COUNT})
  const sequenceId = shuffleArray(POSTS_COUNT)

  for (let i=0; i <= arrayPost.length-1; i++) {
    arrayPost[i] = {
      id: sequenceId[i],
      url: 'photos/' + sequenceId[i] + '.jpg',
      description: getRandomArrayElement(descriptions),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: getRandomPositiveInteger(1, 6)},
        (_, commentIndex) => createComment(commentIndex + 1))
    }
  }
  return arrayPost
}

export { createPosts }

