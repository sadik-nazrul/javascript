// Array holo ekhshathe shobdhoroner data store kore rakhar system. Amra array te string, number, object ebong arrayw rakhte pari
const myArray = ["Sadik", "Sakib", "Shohag", "Hasan", "Yasin", 1, 10, 44, true, false, [0, 2, 5,["Gifari", "Shoikot"]]]
// console.log(myArray);
const newArr = new Array("Sadik", "Sakib", "Shohag", "Hasan", "Yasin", 1, 10, 44, true, false, [0, 2, 5,["Gifari", "Shoikot"]])
// console.log(newArr);

// Array elements ke access korte hole array er namer shathe index use kore access korte hoy
const myArr = [3, 2, 6, 8]
// console.log(myArr[3]);
// console.log(myArr);

// Index dhore jodi amra arra er kono emlement chang korte cai tahole amra ei syntex use korte pari.
myArr[0] = "Sadik";
// console.log(myArr);


// ******* Array Methods ********


// kono array ke amra string e convert kotrte caile evabe korte pari.
const anotherArr = [2, 3, 4, 5]
const another2Arr = anotherArr.join(" * "); // er khetre amra amader nijer moto kore jinish use korte "," sara
// console.log(anotherArr.toString());
// console.log(another2Arr);
// Array er size koto janar jonno amra .length use kore thaki
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);


// Array er kono element er name diye jodi amra tar index jante cai tahole .indexOf use korte hoy. search korar jonno amra .includes use korete pari eta shob shomoy boolean value return kore. Jodi element ti array te na thake tahole ans all time -1 dibe.
const cars = ["toyota", "Tata", "Honda", "BMW"]
// console.log(cars);
// console.log(cars.indexOf("Honda")); // Ans hobe 2
// console.log(cars.indexOf("Hyundai")); // Ans hobe -1
// console.log(cars.includes("apple"));


// Array te kono elements add korar jonno amra .push use kore thaki. Eti main Array er last e element add kore. Main array te kono poriborton korena.
cars.push("Mercediz")
// console.log(cars);


// Array te kono elements Remove korar jonno amra .pop use kore thaki. Eti main Array er last er element Remove kore Return kore dey remove kora element. Eti main array er poriborton kore dey.
cars.pop()
// console.log(cars);


// Array er first er element Remove korar jonno amra  use korte pari .shift.
cars.shift()
// console.log(cars);


// Array er first e element add korar jonno amra  use korte pari .unshift.
cars.unshift("Isuzu")
// console.log(cars);


// Main array ke affact na kore kono element ber dite caile amra use korte pari .slice
const browser = ["Chrome", "Firefox", "Brave", "Safari"]
const rBrowser = browser.slice(1);
const r2Browser = browser.slice(0, 3);
// console.log(rBrowser);
// console.log(r2Browser);
// console.log(browser)


// Main array ke affact na kore array er nirdishto element diye new array create korte caile amra use korte pari .slice
const bike = ["Yamaha", "Bajaj", "Tvs", "Kawasaki", "KTM"]
const num = [0, 1, 2, 3, 4, 5]
// console.log("Main Array ", num);
const bike1 = num.slice(0, 3)
// console.log("A ", num);
// console.log(bike1);


// Main array ke affact kore array er nirdishto element diye new array create korte caile amra use korte pari .splice
const bike2 = num.splice(0, 3)
// console.log("B ", num);
// console.log(bike2);


// Multiple array addition korte amra use korte pari .concat ba spread operator use kore addition o korte pari.
const bdTeam = ["sakib", "Taskin", "Mushfique", "Mahmudullah", "Tamim"]
const newBdTeam = ["Nazmul", "Liton", "Mustafiz", "Shoriful", "Mominul"]

const worldBdTeam = bdTeam.concat(newBdTeam, bike, browser)
// console.log(worldBdTeam);
const worldBdTeam2 = [...cars, ...fruits, ...bike, ...bdTeam, ...newBdTeam]
// console.log(worldBdTeam2);
// console.log([...cars, ...fruits, ...bike, ...bdTeam, ...newBdTeam]);


// Kokhono jodiu erokom situation ashe je array er bhitor multiple nested array thake ebong bola shobguloke single array er element banate tahole amra use korte pari .flat
const myNmbr = [1,2,3,4,[5, 6, 7], 8, [9, 10, [11, 12,[13, 14, 15,[16, [17, [18, [19, [20]]]]]]]]]
const allNumber = myNmbr.flat(8)
const allNumber2 = myNmbr.flat(Infinity) // Result uporerta ar eta same hobe
// console.log(allNumber);
// console.log(allNumber2);