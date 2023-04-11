// // let js ='amazing';
// // console.log(40-20+10);
// // let fristname="mo";
// // console.log(fristname)
// // let Fristname="lio";
// // console.log(Fristname)
// let js = "mazing"
// if (js == "mazing") alert('js amazing')
// let First = 'mo'
// console.log(First)
// let first = 'lio'
// console.log(first)

// ////////////////////////////////////
// // Coding Challenge #1

// /*
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using qthe formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀
// */
// let markWeightDay1 = 78
// let markHightDay1 = 1.69
// let johnHightDay1 = 1.88
// let johnWeightDay1 = 92

// let massMark = markHightDay1;
// let massjohn = johnHightDay1;
// let BMI_Mark = massMark / markHightDay1 ** 2;
// let BMI_John = massjohn / johnHightDay1 ** 2;

// console.log(BMI_Mark, BMI_John)
// if (BMI_Mark > BMI_John) alert('mark')
// if (BMI_John > BMI_Mark) alert('jhon')

let chekc = prompt("What is your chekc");
let value = Number(chekc + (15 % chekc));
console.log(`Hello, ${value}!`);

const bill = 275;
// calculet tip
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const total = tip + bill;
console.log(
  `The bill was ${bill}, the tip  ${tip}, and the total value ${total}`
);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
console.log(
  "the bill was ${bill},the tip ${tip},and the total value ${bill+tip},"
);

const overTip = bill > 300 ? bill * 0.2 : bill * 0.25;
