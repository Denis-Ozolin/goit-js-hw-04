const countTotalSalary = (employees) => {
  let totalSalary = 0;
  // const employeesSalary = Object.values(employees);

  // for (const salary of employeesSalary) {
  //   totalSalary += salary;
  // }

  for (const salary in employees) {
  totalSalary += employees[salary]
}

  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400