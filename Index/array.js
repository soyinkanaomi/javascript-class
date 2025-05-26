//array is a container, a collection of element ,datatype stored in a list like structure

/*intration method
for each
map: used in buliding ui
filter
find
some
find index*/

//transformation method:
/* no 1: .push
adds one or more element to an array*/
const bee = [];
bee.push("javasricpt");
console.log(bee);

const topics = ["data types", "numbers", "operator"];
topics.push("tech");
console.log(topics);

/*no2  pop
remove the last element of an array*/
const top = ["bee", "ppu", "coo"];
top.pop();
console.log(top);

/*no3  unshift
adds one or more element to beginning the array*/
const tops = ["bee", "ppu", "coo"];
tops.unshift("bra", "rat");
console.log(tops);

/*shift 
removes the first element from an array*/
const food = ["mee", "brr"];
food.shift();
console.log(food);

/*no4 spilce
removes from any postion*/
const man = ["5", "8", "10"];
man.splice(2, 2, "30");
console.log(man);
// no5 concant
//no6 lenght
//no7 index of
//no8  inclued
/*no9  slice 
returns value that falls under the assigned to the variable*/
const lee = ["b", "o", "r", "d"];
lee.slice();
console.log(lee);

const sliced = lee.slice(2, 3)
console.log(sliced);
