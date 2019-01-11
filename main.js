//CODE WITH ERRORS
// const cookies = [
//   "Oatmeal Raisin",
//   "Chocolate Chip",
//   "Sugar",
//   "Peanut Butter",
//   "Snickerdoodle",
//   "Ginger"
// ];
// let y = 1;

// for (let x = 1; y < cookies.length; x++) {
//   const currentCookie = cookies[y];
//   console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
// }

// CODE CORRECTED
const cookies = [
  "Oatmeal Raisin",
  "Chocolate Chip",
  "Sugar",
  "Peanut Butter",
  "Snickerdoodle",
  "Ginger"
];
let y = 1;

for (let x = 1; x < cookies.length; x++) {
  const currentCookie = cookies[x];
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

// ORIGINAL CODE WITH SCOPE ERROR
// const conjunction = function (firstWord, secondWord) {
//   const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

// SCOPE ERROR CORRECTED
const conjunction = function(firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`;
  console.log(conjoinedWord);
};

conjunction("Master", "Card");
