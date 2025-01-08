// function logger() {
//   console.log("My name is maryam");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// funtion expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
};
