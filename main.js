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
// let num = 20; // "009"

// // Test Case 2
// // let num = 20; // "020"

// // Test Case 3
// // let num = 110; // "110"

// if (num < 10){
//   console.log(`00${num}`)
// }
// else if ( num > 10 && num <100){
//   console.log(`0${num}`)

// }
// else if ( num > 100){
//   console.log(`${num}`)

// }

// five
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`)
// }
// if (num1 !== str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
// }
// if ((num1 != str2 && typeof num1 !== typeof str2)) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`)
// }
// if ((typeof str == typeof str2) && str != str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value}`)
// }

// six
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && typeof num1 != typeof num3){
// console.log (`30 Is Larger Than 10 And Type string Not The Same Type As number`)
// }
// else if (num2 > num1 && num2 == num3 &&typeof num1 != typeof num3  ){
// console.log (`30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`)
// }
// else if (num3 !== num1 &&typeof num2 != typeof num3  ){
// console.log (`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
// }
// seven
// Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 =33;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// eight

// let day =    "Wednesday" ;
// day = day.trim().toLowerCase();
// day = day.charAt(0).toUpperCase() + day.slice(1);
// // // You Need To Remove Spaces And Make First Letter Capital => Friday

// // let day = "Friday";
// // let day = "Saturday";
// // let day = "Sunday";
// // // Output => "No Appointments Available"
// switch (day) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
// console.log("No Appointments Available")
// break;

// // let day = "Monday";
// // let day = "Thursday";
// // // Output => "From 10:00 AM To 5:00 PM"
// case "Monday":
// case "Thursday":
//   console.log("From 10:00 AM To 5:00 PM")
//   break;
// // let day = "Tuesday";
// // // Output => "From 10:00 AM To 6:00 PM"
// case "Tuesday":
//   console.log("From 10:00 AM To 6:00 PM")
//   break;
// // let day = "Wednesday";
// // // Output => "From 10:00 AM To 7:00 PM"
// case "Wednesday":
//   console.log("From 10:00 AM To 7:00 PM")
//   break;
// // let day = "World";
// // // Output => "Its Not A Valid Day"
// default:console.log( "Its Not A Valid Day")
// break;
// }

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// myFriends.length = 3;
// console.log(myFriends);

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.reverse());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());
/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my = my.splice(zero, ++counter).reverse()

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

// my.splice(++zero,--counter, "Elzero");
// console.log(my[counter]); // "Elzero"
// my = my[counter].slice(-counter)
// console.log(--zero)
// console.log(my[--zero]+my[++zero].toUpperCase()); // "rO"

// assignment

// one

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// myFriends.splice(num)
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // two
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.shift()
// friends.pop()

// console.log(friends); // ["Eman", "Osama"]

// // three
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo).sort().reverse()

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// // four
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// five

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// console.log(haystack.includes("JS"))
// console.log(haystack.includes(needle))

// if ((haystack.includes(needle)) === true){
//   console.log("found")
// }

// // six
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// let num = arr1.length
// allArrs = arr1.concat(arr2).sort()
// allArrs = allArrs.slice(++num)

// console.log(allArrs.join("").toLowerCase()); // fxy

// let products = [ "sdgreop","eswrkjeri","wlj9i"]

// let index =  0

// while (true  ){
//   console.log(index);
//   index++
//   if (index === 80001){
//     break
//   }
// }

// assignments 48-56

// one
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Write Your Code Here
// for (let i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }

// 2
// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i=start ; i >= stop ; i--){

// if (i < start) {
//     console.log(`${end}${i}`);
//   } else {
//     console.log(i);
//   }

// }

// 3
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i<=end; i++ ){
//   console.log(i)
//   console.log(`-- ${breaker}`)
//   console.log(`-- ${end-breaker}`)
// }

// 4

// let index = 10;
// let jump = 2;

//  for ( ;;) {
//    console.log(index);
//    index -= jump;
//    if(index<(jump*jump))break
//   }

// // Output
// 10
// 8
// 6
// 4

// let names = "Ahmed"

// console.log(names[0])
// 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (let i = 0;i<=friends.length-1;i++){
//   if(friends[i][0] === letter.toUpperCase()){continue}

//   console.log(`${i} => ${friends[i]}`)
// }
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// 6
// let start = 0;
// let swappedName = "elZerO";
// let collection = ''

// for (let i = start; i < swappedName.length; i++)

//   {
// if (swappedName[i] === swappedName[i].toLowerCase())
// {collection += swappedName[i].toUpperCase()}

// else{
//   collection += swappedName[i].toLowerCase()
// }

// }

// console.log(collection)

// // Output
// "ELzERo"

// // 7

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// let onlynumbers = []
// mix.sort()

// for (let i= start ;i<mix.length;i++){

// if (typeof mix[i] === "string"){
//  continue
// }
// else if(mix[i] === 1){
//   continue
// }
// else{
//   console.log(mix[i])
// }
// }

// الثاامن
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let counter = 0;

// while(i < friends.length)
//   {
//     if(typeof friends[i] !== "number" ){
//      friends[i]
//     }
//     if(friends[i][0] === "A" ){
//      continue
//     }
//     console.log(friends[i][0])
//     i++

// }
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let counter = 1;

// while (i < friends.length) {
//   // 1. فحص أن العنصر ليس رقماً وأنه لا يبدأ بحرف A
//   if (typeof friends[i] !== "number" && !friends[i].startsWith("A")) {
//     console.log(`${counter} => ${friends[i]}`);
//     counter++; // يزيد العداد فقط عند الطباعة الناجحة
//   }

//   i++; // زيادة العداد الرئيسي في كل دورة بانتظام لتجنب الـ Infinite Loop
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);

// let counterH = 1
// let i = 0

// for (; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") { break }
//   document.write(`<div>`)
//   document.write(`<h1>The Admin of the team is ${counterH} ${myAdmins[i]}</h1> `)
//   let counter = 1
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {

//       document.write(`<p>-${counter} ${myEmployees[j]}</p>`)
//       counter++
//     }
//   }
//   document.write(`<br> <hr>`)
//   document.write(`</div>`)
//   counterH++
// }

// تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// function sayHello(theName, theGender) {

//   if (theGender === "Male"){
//     console.log(`Hello Mr ${theName}`)
//   }
//   else if (theGender === "Female"){
//     console.log(`Hello Miss ${theName}`)
//   }
// else(
//   console.log(`Hello ${theName}`)
// )
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// function ageInTime(theAge) {
// if (theAge < 10 || theAge > 100){
//   console.log("Age Out Of Range")
// }
// else{
//   console.log(theAge);
//   console.log(theAge * 12 )
//   console.log(theAge * 12 * 4)
//   console.log(theAge * 12 * 4 * 7)
//   console.log(theAge * 12 * 4 * 7 * 24)
//   console.log(theAge * 12 * 4 * 7 * 24 * 60)
//   console.log(theAge * 12 * 4 * 7 * 24 * 60 *60)

// }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// function checkStatus(a, b, c) {
//   let name, age, status;

//   // 1. فحص المتغير a وتحديد هويته بناء على نوعه
//   if (typeof a === "string") name = a;
//   else if (typeof a === "number") age = a;
//   else if (typeof a === "boolean") status = a;

//   // 2. فحص المتغير b وتحديد هويته بناء على نوعه
//   if (typeof b === "string") name = b;
//   else if (typeof b === "number") age = b;
//   else if (typeof b === "boolean") status = b;

//   // 3. فحص المتغير c وتحديد هويته بناء على نوعه
//   if (typeof c === "string") name = c;
//   else if (typeof c === "number") age = c;
//   else if (typeof c === "boolean") status = c;

//   // 4. تجهيز رسالة الحالة
//   let statusText = status ? "You Are Available For Hire" : "You Are Not Available For Hire";

//   // 5. الطباعة بالشكل المطلوب
//   console.log(`Hello ${name}, Your Age Is ${age}, ${statusText}`);
// }

// // Needed Output
// checkStatus("Osama", 38, true);   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true);   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama");   // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38);  // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function createSelectBox(startYear, endYear) {
// document.write("<select>")

//  for (let i = startYear ; i <= endYear; i++){
//  document.write("<option>")
// document.write(`${i}`)
//  document.write("</option>")
//  }
//  document.write("</select>")

// }
// createSelectBox(2000, 2021);

// function calculate(firstNum, secondNum , operation) {
//   if(secondNum === undefined){
//     console.log("Second Number Not Found")
//   }

//   if(operation === "add"){
// console.log(firstNum + secondNum)
//   }

//   else if(operation === undefined){
//     console.log(firstNum + secondNum)
//   }
//   else if(operation === "subtract"){
//     console.log(firstNum - secondNum)
//   }
//   else if(operation === 'multiply'){
//     console.log(firstNum * secondNum)

//   }

// }
// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// let i = 0;
// function multiply(...numbers) {
//   let result = 1;
//   for (let i = 0; i < numbers.length; i++)
//      {
//        if (typeof numbers[i] !== "number") {
//          continue;
//        }
//      numbers[i] = Math.floor(numbers[i]);
//       result *= numbers[i];
//     }
//     console.log(result)
// }

// multiply(10, 20); // 200
// multiply("A",10, 30); // 300
// multiply(100.5, 10,"B"); // 1000

// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     // Write Your Code Here
//     // Osama Mohamed => Osama M.
//     zName = zName.split(" ")
//     return `${zName[0]} ${zName[1][0]}.`
//     // Ahmed ali => Ahmed A.

//   }

//   function ageWithMessage(zAge) {
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//   let number =Number(zAge.match(/\d+/))
//     // 32 Is The Age => Your Age Is 32
//     return`Your Age Is ${number}`
//   }
//     function countryTwoLetters(zCountry) {
//     // Write Your Code Here
//   return zCountry.slice(0, 2).toUpperCase();
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//      // Write Your Code Here
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
//   }

//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

//2

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// gpt q
// let sayHello =(name) => `Hello ${name}`;

// console.log(sayHello("Ahmed")); // Hello Ahmed

//3

// let checker =(zName) =>
//     (status) =>
//       (salary)=>
//        status === "Available"
//     ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 4

// function specialMix(...data) {
//   function numinstr() {
//     let starter = 0;
//     let counter = 0;
//     let hasNumber = false;

//     for (let i = starter; i < data.length; i++) {
//       if (typeof data[i] === "string") {
//         let number = data[i].match(/^\d+/);

//         if (number !== null) {
//           counter += Number(number[0]);
//           hasNumber = true;
//         }
//       } else if (typeof data[i] === "number") {
//         counter += data[i];
//         hasNumber = true;
//       }
//     }

//     if (!hasNumber) {
//       return "All Is Strings";
//     }

//     return counter;
//   }

//   return numinstr();
// }

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...name) {
// return `String [${name.join("], [" )}] => Done !`
// };

// let names =  (...name) => 
//  `String [${name.join("], [" )}] => Done !`
// ;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim" ,"abde"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + Number(nums);

// console.log(calc(10, 20,50)); // 80

// let myNumbers = [20, 50, 10, 60];

// function calc(one, two, ...nums) {
//   return one + two + Number(nums);
// }
// console.log(calc(10, 20,50)); // 80
