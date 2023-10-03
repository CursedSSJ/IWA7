const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo =
  leoName.replace(/\s/g, "") +
  " " +
  leoSurname.replace(/\s/g, "") +
  " (Owed: " +
  "R" +
  Math.abs(parseFloat(leoBalance)).toFixed(2) +
  ")";
const sarah =
  sarahName.replace(/\s/g, "") +
  sarahSurname.replace(/\s/g, "") +
  " (Owed: " +
  "R" +
  Math.abs(parseFloat(sarahBalance)).toFixed(2) +
  ")";
const total =
  "Total amount owed: " + "R" + Math.abs(parseFloat(owed)).toFixed(2);
const result =
  leo + "\n" + sarah + "\n\n" + divider + "\n" + total + "\n" + divider;

console.log(result);
