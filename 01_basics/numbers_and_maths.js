// Javascript e number decimal ebong decimal sara lekha jay
let a = 123
let b = 13.00
// console.log(a,b);


// Proyojone amra boro number evabe lekhte pari
let c = 145e6 //er result ashbe 145000000
let d = 159e-4 //er result ashbe 0.0159
// console.log(c);
// console.log(d);


// Javascript e number 15 porjonto thik moto result show kore er beshi dile jhamela kore fele decimal hole 17 er upore gele genjam kore fele
let e = 999999999999999 //er Result 999999999999999
let f = 111111111111111111 //er Result 111111111111111100 - genjam kore felche
// console.log(e);
// console.log(f);


// JS e floating number er arithmetic operation shob shomoy 100% accurate hoyna
let g = 0.2 + 0.1
// console.log(g); // er Result howar kotha 0.3 kintu ashche 0.30000000000000004
// ei problem solve korar upay holo
let h = (0.2 * 10 + 0.1 * 10) / 10
// console.log(h);


// Number er shatrhe number addition korle number result ashbe kintu string er shathe number addition korle string ashe.
let i = 22
let j = 43
let add = i+j
// console.log(typeof(add));
let k = "42"
let l = 42
// console.log(k+l);


// Number er shathe string er onno arithmatic operation korle ba decimal string er shathe decimal string onno operation korle number result number ashbe ebong hishab hoye ashbe. real string er shathe number er onno arithmatic operation korle result NaN ashbe
let x = 10;
let y = "10";
let z = x * y;
// console.log(z);
// console.log(typeof(z));
let m = "Sadik"
let n = 10
let o = m/n
// console.log(o);



//******** Js Number Methods ********
const roll = 102;
// console.log(roll);


//Kono Number ke string e convert korte toString er bebohar kora hoy.
const serial = new Number(1030);
// console.log(serial);
// console.log(serial.toString());


// Kono number ke sheshe kototuku show korate caile toFixed(2) is perfect for working with money.
let p = 9.656;
// console.log(p.toFixed(0));
// console.log(p.toFixed(2));
// console.log(p.toFixed(4));
// console.log(p.toFixed(6));


// kono Number data tyopes e koto velue ache dekhte caile amra likhte pari.
let num = 12345
// console.log(num.valueOf());


//Kono variable ke number e convert korar jonno amra ei 3ta method use korte pari
// console.log(Number("John"))
// console.log(Number("10"))
// console.log(typeof(Number("10.34")))


//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));


// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
// console.log(parseFloat("-10"));
// console.log(parseFloat("-10.33"));
// console.log(parseFloat("10"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 20 30"));
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));


const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-BD'));