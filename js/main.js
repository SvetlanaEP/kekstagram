function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    console.log("Числа должны быть положительными");
    return
  }
  if (typeof min == "string" || typeof max == "string") {
    console.log('Введена строка');
    return;
  }
  if (typeof min == 'undefined' && typeof max == 'undefined') {
    let RandomNumber = Math.floor(Math.random()*1000+1); // Покажет от 0 до 1000 включительно
    console.log(RandomNumber)
    return RandomNumber;
  }
  if (typeof max == 'undefined') {
    max = min;
    min = 0;
  }
  if (min > max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    let RandomNumber = Math.floor(Math.random()*(min-max+1))+max;
    console.log(RandomNumber);
    return RandomNumber;
  }
    min = Math.ceil(min);
    max = Math.floor(max);
    let RandomNumber = Math.floor(Math.random()*(max-min+1))+min;
    console.log(RandomNumber);
    return RandomNumber;
}

getRandomNumber();
