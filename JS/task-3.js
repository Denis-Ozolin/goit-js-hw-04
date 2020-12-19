
// Если есть вариант какой то по проще, напишите пожалуйста,
// долго с этим просидел...
// И еще подскажите пожалуйста по чему ВСкод подчеркивает
// как будто это ошибки keys, values, entries в методе Object.***();

const findBestEmployee = function (employees) {
    for (const employe in employees) {
      if (employees[employe] === Math.max(...Object.values(employees))) {
        return employe;
    }
  };
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux