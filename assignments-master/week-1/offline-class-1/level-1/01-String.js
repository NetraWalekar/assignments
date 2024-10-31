// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing~.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

function countLength(word){
  console.log(word);
  console.log(word.length);
}

countLength('watermelon')

  indexOf
  function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

function indexOf(word, which){
  console.log("Your string is : " + word);
  console.log("Index of " + word + " is : " + word.indexOf(which));
}
indexOf('Hello World', 'World')

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

function lastIndexOf(string, target){
  console.log("original string is : " + string);
  console.log("Index :" + string.lastIndexOf(target));
}

lastIndexOf("Hello from string.js ",'from')

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

function slice(str, start,end){
  console.log("your original string : " + str);
  console.log("After slicing : " + str.slice(start,end))
}

slice("Hello world",6,10);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

function getsubstring(str, start , end ){
  console.log("  Original stirng : " + str);
  console.log(" Substring : " + str.substring(start,end));
}
getsubstring("This is written in javascript", 7)

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

function replace(str,whatto, replacement){
  console.log("Original str : " + str);
  console.log("After :" + str.replace(whatto, replacement))
}
replace("My Name is Netra",'Netra','Shruti')

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

function countwords(str, separator){
  console.log("original str :" + str);
  console.log("After : " + str.split(separator))
}
countwords("Hello this is my assignments", " ")

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString("          Hello World ");

function trim(str){
  console.log("original : "+ str);
  console.log("After : " , str.trim());
}

trim("    hello hii        ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");


function casechange(str){
  console.log("Original string : " + str);
  console.log("upper case : " + str.toUpperCase());
  console.log("lower case : "  + str.toLowerCase());
}

casechange("Hello WORLD");