/*
Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта,
а возвращает значение объекта, доступное по этому ключу.
Пример: ({ 'key': 'property' }, 'key') => 'property'
*/

const obj = {'James':'1000'};
const key = 'James';

function getValue(obj, key) {
    return obj[key];
  }

console.log(getValue(obj, key));
module.exports = objValue