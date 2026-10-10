// اول 10 انواع البيانات
// console.log("abdo saad");
// console.log(typeof "500");
// console.log(typeof 500);
// console.log(typeof [10,50,2545,5155]);
// console.log(typeof {name:'abdo', age:22, country:'eg'});
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log('%chello %cabdo %csaad','color:red ; font-size:40px', 'color:green ; font-size:40px','color:blue ; font-size:40px' )

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