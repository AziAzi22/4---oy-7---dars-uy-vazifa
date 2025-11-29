// 1 - masala

// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime (Python), Time (Ruby), and Data.Time.Clock.UTCTime (Haskell) instances.
// The start time will always be before the end time.

// function elapsedSeconds(startDate, endDate){
//   return Math.floor((endDate - startDate)/1000)
// }
// console.log(elapsedSeconds(new Date(2000, 1, 1), new Date(2000, 1, 2)));

// 2 - masala

// Another rewarding day in the fast-paced world of WebDev. Man, you love your job! But as with any job, somtimes things can get a little tedious. Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore. Time to automate! You want to write some functions that will generate the HTML for you.

// To organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

// For example,

// JavaScript:

// var g = new HTMLGen();
// var paragraph = g.p('Hello, World!');
// var block = g.div(paragraph);

// // The following are now true
// paragraph === '<p>Hello, World!</p>'
// block === '<div><p>Hello, World!</p></div>'
// Your HTMLGen class should have methods to create the following elements:

// a
// b
// p
// body
// div
// span
// title
// comment
// Note: The comment method should wrap its argument with an HTML comment. It is the only method whose name does not match an HTML tag. So, g.comment('i am a comment') must produce <!--i am a comment-->.

// function HTMLGen() {}
// HTMLGen.prototype.a = function (text) {
//   return `<a>${text}</a>`;
// };
// HTMLGen.prototype.b = function (text) {
//   return `<b>${text}</b>`;
// };
// HTMLGen.prototype.p = function (text) {
//   return `<p>${text}</p>`;
// };
// HTMLGen.prototype.body = function (text) {
//   return `<body>${text}</body>`;
// };
// HTMLGen.prototype.div = function (text) {
//   return `<div>${text}</div>`;
// };
// HTMLGen.prototype.span = function (text) {
//   return `<span>${text}</span>`;
// };
// HTMLGen.prototype.title = function (text) {
//   return `<title>${text}</title>`;
// };
// HTMLGen.prototype.comment = function (text) {
//   return `<!--${text}-->`;
// };
// console.log(
//   new HTMLGen().body(
//     new HTMLGen().div("Hello")
//   )
// );

