
//! Find 1st January be a Sunday between a range of years

//? Log a separator to visually distinguish the output
// console.log('--------------------');

//? Loop through the years from 2014 to 2050 (inclusive)
// for (var year = 2014; year <= 2050; year++) {
//? Create a Date object for January 1st of the current year
// var d = new Date(year, 0, 1);


//? Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
// if (d.getDay() === 0) {
//? Log a message if January 1st is a Sunday for the current year
// console.log("1st January is being a Sunday  " + year);
// }
// }

//? Log another separator to conclude the output
// console.log('--------------------'); 

//! Display the current day and time in a specific format

// var today = new Date();

// var day = today.getDay()

// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//? Display the current day
// console.log("Today is " + daylist[day] + ".");

// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

//? Determine AM or PM
// var prepand = (hour >= 12) ? "PM" : "AM"

//? convert 24-hour to 12-hour format
// hour = (hour >= 12) ? hour-12 : hour

//? Check for special cases when hour is 0
// if (hour === 0 && prepand === 'PM'){
//     if (minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'Noon';
//     }else{
//         hour = 12;
//         prepand = 'PM'
//     }
// }
//? Check for special cases when hour is 0
// if (hour === 0 && prepand === 'AM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'AM';
//     }else{
//         hour =12
//         prepand = 'AM'
//     }
// }

//? Display the current time
// console.log(("Current Time: " +hour+prepand + " : " + minute + " : " + second));

//! Sum Two Integers (Triple if Equal)
// function sum_of_two_numbers(n,m){
//     if(n === m){
//         return (m+n)*3
//     }else{
//         return m+n
//     }
// }

// console.log(sum_of_two_numbers(3,4));

//! Check if Number or Sum is 50
// function check_50(n, m) {
//     return (n === 50 || m === 50 || m + n === 50)
// }
// console.log(check_50(50, 66));
// console.log(check_50(32, 50));
// console.log(check_50(30, 20));
// console.log(check_50(30, 25));

// let str1 = 'Python'
// function check_string(str1) {
//     if (str1.substring(0, 2) === 'Py') {
//         return str1
//     } else {
//         return 'Py' + str1
//     }
// }

// console.log(check_string(str1));
// console.log(check_string('bdvbh'));



// console.log('hello');

// const hello = 'netaji'

// const accountId = 122421
// let accountEmail = "deepak@gmail.vom"
// var accountPassword = '123456'
// accountCity = 'Hyderabad'


// accountId = 4457
// console.log(accountId);

// accountEmail = 'dddc@gmail.com'

// let account

// account = 15545

// console.log(accountCity);

// console.table([accountId, accountEmail, accountPassword, accountCity])

// let x = 5
// if (x > 3){
//     let a = 50
//     var b = 56
//     const c = 85
//     console.log(x);
    
// }
// console.log(a);
// console.log(b);
// console.log(c);


//! Convert temperatures to and from celsius, fahrenheit

// alert(document.URL)

// var var_name = 'abcd'

// var n = 120

// this[var_name] = n;

// console.log(this[var_name]);

// function difference(number){
//     if (number > 13){
//         return (number-13)*2
//     }else{
//         return 13-number
//     }
// }

// console.log(difference(20));

// let a = undefined
// console.log(typeof a);
// console.log(typeof null);
// console.log(typeof NaN);

// console.log('num'/5);
// console.log('num'*5);

// let score = '55'

// let nu = Number(score)

// console.log(typeof nu);
// console.log(nu);
// console.log("2" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);

// console.log('2' === 2);
