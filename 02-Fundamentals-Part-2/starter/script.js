'use strict';
// let hasdriverslicens=false;
// const passTest=true;
// if(passTest) hasdriverslicens =true;
// if(hasdriverslicens)console.log('you can drive:D');

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`juice with ${apples} apples and ${oranges} oranges`;
//     return juice;

// }
// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice);
// const appleOrengeJuice=fruitProcessor(2,4);
// console.log(appleJuice);

// // function 
// function clacAge1 (birthYeer){
//     return 2037 -birthYeer;
// }
// const age1=clacAge1(1991);
// // function expression

// const calcage2=function (birthYeer){
//     return 2037-birthYeer;
// }
// const age2=calcage2(1991);
// console.log(age1,age2)
// function clacAge1 (birthYeer){
//         return 2037 -birthYeer;
//     }


// Arrow function
// const calcAge3=birthYeer=>2037-birthYeer;
// const age3=calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement=(birthYeer,firstName)=>{
//     const age =2037-birthYeer;
//     const retirement=65-age
//     if (retirement>0){
//         return `${firstName} retires in ${retirement} yeers`;
//     }else{
//         return `${firstName} retired since`;
//     }



// }
// console.log(yearsUntilRetirement(1991 ,'mo'));
// console.log(yearsUntilRetirement(1970 ,'lio'));


/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const  calcAverage= (a,b,c)=>(a+b+c)/3;

// let scoreDolphins=calcAverage (44,3,71);
// let scoreKolas=calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKolas);
// const checkWinner=function(avgDolphins,avgKoalas){
//     if(avgDolphins>=avgKoalas*2){
//         console.log(`Dolphin win(${avgDolphins} vs.${avgKoalas})`)

//     }else if (avgKoalas>=avgDolphins*2){
//         console.log(`Koalas win(${avgKoalas} vs.${avgDolphins})`)

//     }else{
//         console.log('no team is win ...');
//     }
// }
// checkWinner(scoreDolphins,scoreKolas)

// // test 2
// scoreDolphins=calcAverage (85,54,41);
// scoreKolas=calcAverage(23,34,27);
// console.log(scoreDolphins,scoreKolas);
// checkWinner(scoreDolphins,scoreKolas);

// const calcage2=function (birthYeer){
//     return 2037-birthYeer;
// }
// const age2=calcage2(1991);
// console.log(age1,age2)
// function clacAge1 (birthYeer){
//         return 2037 -birthYeer;
//     }

// const frined1='mo';
// const frined2='maher';
// const frined3='lioo';
// const friends=['mo','lio','peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);
// friends[2]='jon';
// console.log(friends);
// const firstName='jones';
// const Jones=[firstName,'schmedtmane',2036-1990,'teacher',friends]
// console.log(Jones)
// console.log(Jones.length)

// function clacAge1 (birthYeer){
//     return 2037 -birthYeer;
// }

// const years2=[1990,2000,2002,2018];
// const Age1=clacAge1(years2[0]);
// const Age2=clacAge1(years2[1]);
// const Age3=clacAge1(years2[years2.length-1]);
// console.log(Age1,Age2,Age3)
// const ages=[clacAge1(years2[0]),clacAge1(years2[1]),clacAge1(years2[years2.length-1])];
// console.log(ages)

const friends=['mo','lio','peter'];
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('mo'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('lio'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('lio')) {
    console.log('You have a friend called Steven');
}

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// function calcTip(bill){
//     return bill>=50 &&bill<=300 ?bill *.15:bill *.2
// }
// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,total)


// const mo={
//     firstName:'mo',
//     lastName:'maher',
//     birthYear:2004,
//     job:'devolepr',
//     friend:['lio','anas','hosame'],
//     hasDriverslicense:true,

//     // calcAge :function(){
//     //     return 2037-this.birthYear;
    
//     // }
//     calcAge :function(){
//         this.age=2037-this.birthYear;
//         return this.age;
    
//         getSummary:function()
//     }

// };

// console.log(mo.calcAge());
// console.log(mo.age);





// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
/*
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

  ///////////////////////////////////////
  // Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

  // console.log(jonas[0])
  // console.log(jonas[1])
  // ...
  // console.log(jonas[4])
  // jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
  console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
if (typeof jonas[i] !== 'string') continue;

console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
if (typeof jonas[i] === 'number') break;

console.log(jonas[i], typeof jonas[i]);
}


console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
if (typeof jonas[i] !== 'string') continue;

console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
if (typeof jonas[i] === 'number') break;

console.log(jonas[i], typeof jonas[i]);
}
*/

///////////////////////////////////////
// Looping Backwards and Loops in Loops
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

//   // 0, 1, ..., 4
//   // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }



/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/







