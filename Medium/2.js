/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
    const randomArray = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomArray.push(randomNumber); 
  }
  return randomArray;

}

console.log(randomArr());
module.exports = randomArr
