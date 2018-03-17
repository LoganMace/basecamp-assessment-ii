// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

var me = {
  firstname: "Logan",
  age: 25,
  state: "Texas"
};

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'favecolor' and set it to your favorite color as a string

me.faveColor = "blue";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
//DON'T TOUCH THE CODE ABOVE
message["text"] = "test";

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

var adjustCount = {
  upVote: function(num){num++; return num;},
  downVote: function(num){num--; return num;}
};

// #5 Create an array called 'myFriends' with four of your friends names

var myFriends = ["Nick", "Sean", "Brian", "Caleb"];

// #6 Add a fifth friends name to the end of your myFriends array

myFriends.push("Gabi");

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
//DON'T TOUCH THE CODE ABOVE
var myArrayCopy = myArray.slice();

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
var evensArray = [];
function evensOnly() {
  for(i=0;i<myNumbers.length;i++){
    if(myNumbers[i] % 2 == 0){
      evensArray.push(myNumbers[i]);
    };
  };
  return evensArray;
};

// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];
function friendTest(obj){
  return obj.friend == true;
};
var trueFriends = peopleIknow.filter(friendTest);

// #10 create a function called indexFinder and loop over the randomNumbers array below and return the result into a new array called 'indexes' with just their indexes. Be sure to invoke indexFinder.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
var indexes = [];
function indexFinder(arr){
  for(i=0;i<arr.length;i++){
    indexes.push(i);
  };
  return indexes;
};
indexFinder(randomNumbers);