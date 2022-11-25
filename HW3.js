//The purpose is to return a string of length 4. The string will consists of randomly selected letters from an array of 7 different letters.

function make_random_code() {
  var items = ["A", "B", "C", "D", "E", "F", "G"];
  var newItems = [];

  for (var i = 0; i < 4; i++) {
    var b = Math.floor(Math.random() * items.length);
    newItems.push(items[b]);
    items.splice(b, 1);
  }
  return newItems.join("");
}

console.log(newItems);

//takes two strings str1 and str2, and returns the number of characters that match both on position and value
function exact_match(str1, str2) {
const str1 = "ABAA";
const str2 = "ABBA";

var count = 0;
for (let i = 0; i < str1.length; i++ ){
if(str1[i] == str2[i]){
count++;
}
}
}

// takes two strings and compare how many letters are the same in the two strings
var x = "ABA";
var y = "BAA";

function match(x, y) {
  var count = 0;
  for (let i in x) {
    y.includes(x[i]) ? count++ : false;
  }

  return count;
}

console.log(match(x, y));
