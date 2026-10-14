// اول 10 انواع البيانات
// console.log("abdo saad");
// console.log(typeof "500");
// console.log(typeof 500);
// console.log(typeof [10,50,2545,5155]);
// console.log(typeof {name:'abdo', age:22, country:'eg'});
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log('%chello %cabdo %csaad', 'color:red ; font-size:40px', 'color:green ; font-size:40px', 'color:blue ; font-size:40px')

// firist9 Assinment

// console.group("group1");
// console.log("message1");
// console.log("messagetwo");
// console.group("hcildgroup");
// console.log("message1");
// console.log("two");
// console.group("grandchildgroup");
// console.log("message1");
// console.log("message2");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("group2");
// console.log("message1");
// console.log("messagetwo");
// console.groupEnd("group2");

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;
// document.write(markup)

// let as = ("abdo")
// let b = ("hello bb")
// console.log(` ${as} ${b}`)

// واجب الفيديو ال 17
// let title = ("elzero")
// let discription = ("web school")
// let DateContent = ("25/10")
// let contain = (
//     `
//    <div class="card">
//     <div class="child">
//       <h1>${title}</h1>
//       <p>${discription}</p>
//       <span>${DateContent}</span>
//     </div>
//   </div>
//     `
// )
// document.write(`
//     ${contain.repeat(4)}
//     `)

// تاني دفعه من الواجب
// let numberOne = (10)
// let numberTwo = (20)

// // Ouput
// console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
// console.log(typeof (numberOne+numberTwo))// Normal Concatenate => String
// console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// console.log( typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

// console.log(numberTwo + "\n"+numberOne);
// /*
//   Normal Concatenate
//   20
//   10
// */

// console.log(`${numberOne}
// ${numberTwo}`);
// /*
//   Template Literals Way
//   20
//   10
// */

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// console.log("I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With
// ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"");)

// let a = 21;
// let b = 20;
// var nomone = ("_"+b+""+a+"_")
// let result = (b+""+a)
// const help = ("_"+b+""+a+"_")
// console.log("_"+a+nomone+result+help+b+"_");
// // _21_2021_2021_2021_20_

/*
  Challenge 1
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++
// );

// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // Only Use Variables Value
// // Do Not Use Variable Twice

// console.log(-d*e++); // 2000
// console.log(-d+ ++e*++g + --f   ); // 173

// 3 assinment
// num1
// Replace ? With Arithmetic Operators
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// Num2
// let num = 3;
// let b= true
// let c= false

// // Solution One
// console.log(num+num); // 6

// // Solution Two
// console.log(num * ++b); // 6

// // Soultion Three
// console.log(num**b -num ); // 6

// // Soultion Four
// console.log(- -num*b); // 6

// // Solution Five
// console.log(num * b * ++c ); // 6

// // Solution Six
// console.log(num**num / ++b - ++c - --c); // 6

// Num3
// let num = "10";
// let a = true
// let b = false

// // Solution One
// console.log(+num + +num); // 20

// // Solution Two
// console.log(+num * ++a + b++) // 20

// // Solution Three
// console.log(+num * ++b ); // 20

// // Solution Four
// console.log(); // 20

// num4
// let points = 10;

// points +=(true+true+true)
// console.log(points); // 13

// points -=(true+true+true+true+true)
// console.log(points); // 8;

/*
  Number Challenge 22/26
*/

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(parseInt(Math.min(a , b ,c , d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a**(Math.floor(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.floor(d));
// console.log(parseInt(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Valus
// console.log(((Math.floor(b)/Math.ceil(d))).toFixed(2).toString()) // 66.67 => String
// console.log(Math.ceil(((Math.floor(b)/Math.ceil(d))).toFixed(2).toString())); // 67 => Number

// 22-26 assignment
// ONE

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1e5); // 100000
// console.log(10*10*10*10*10); // 100000
// console.log(10**5); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(Number(100000)); // 100000
// console.log(100000.0000); // 100000
// console.log(1e3*1e2); // 100000
// console.log(Math.floor(100000.1)); // 100000
// console.log(parseFloat("100000")); // 100000
// console.log(parseInt(100000)); // 100000

// TWO
// console.log(-Number.MIN_SAFE_INTEGER);

// three
// console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16
// console.log(String(Number.MAX_SAFE_INTEGER).length)

// four

// let myVar = "100.56789 Views";

// console.log(Math.floor(parseFloat(myVar))); // 100
// console.log((parseFloat(myVar).toFixed(2))); // 100.57

// five
// let num = 10;
// console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

// six
// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(+flt.toFixed()); // 10

// // seventh
// console.log(Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER))); // 0 || 1 || 2 || 3 || 4

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/
//

// to 30 assignments

// one
// let a = "Elzero";
// console.log(a[0].toLowerCase()); // e
// console.log(a.charAt(0).toLowerCase()); // e
// console.log(a.slice(0,1).toLowerCase()); // e
// console.log(a.substr(0,1).toLowerCase()); // e
// console.log(a.substring(0,1).toLowerCase()); // e
// console.log(a.at(0).toLowerCase()); // e
// console.log(a.slice(0,1).toLowerCase().repeat(3)); // eee

// two
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// // السطر الأول: التأكد من وجود الحرف Z داخل الكلمة
// console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // true

// // السطر الثاني: التأكد أن الكلمة تبدأ بالحرف E
// console.log(word.toLowerCase().startsWith(letterE.toLowerCase())); // true

// // السطر الثالث: التأكد أن الكلمة تنتهي بالحرف o
// console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // true

/*
  If Condition Challenge
*/



// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// };
//  a < 10 ?
//  console.log(10):
//  a  >= 10 && a <= 40?
//    console.log("10 To 40"):
//    a > 40 ?
//   console.log("> 40"):
//   console.log("Unknown")


// Write Previous Condition With Ternary If Syntax

// let st = "Elzero Web School";

// console.log(st.charAt(st.toLowerCase().indexOf("w")).toLowerCase())

// if ((st.length*2).toString() === "34") {
//   console.log("good");
// }

// W Position May Change
// if (st.charAt(st.toLowerCase().indexOf("w")).toLowerCase() === "w") {
//   console.log("gooooooooooooood");
// }

// if (st !== "string") {
//   console.log("Good");
// }

// if (typeof st ===typeof "number") {
//   console.log("Good");
// }
// console.log()
// if (st.slice(0 , 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

/*
  Switch Challenge
*/

// let job = "Developer";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
// switch (job){

// default: console.log(4000)
// break;
// case "Manager":
//   console.log(8000)
//   break;
// case "IT" :
// case "Support":
//   console.log(6000)
//   break;
// case "Developer":case
// "Designer":
//   console.log(7000)
//   break;
// }
/*
  If Challenge
*/



// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
// let holidays = 0;
// let money = 0;

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// }
// else if (holidays === (1 || holidays=== 2)) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// }
// else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// }
// else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// }
// else if (holidays === 5) {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }
// else {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }
// ASSIGNMENT
// one

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 != 100 != 10 != 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 != +"-40"); // true
// console.log(typeof 10 != -"-40"); // true
// console.log(+ "10"== 10); // true
// console.log(Boolean( 20 != false)); // true 

// two
// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(num1 != num2); // true
// console.log((typeof num1)==(typeof num2)); // true
// console.log((Boolean(num1))==(Boolean(num2))); // true
// console.log(num2 >= num1);; // true

// three
// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a != b); // true
// console.log(a !== b || a > c); // true
// console.log(Boolean(a != b) && Boolean(a < b) && Boolean(a !== c) && Boolean(a != c)); // true

// four
// Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"