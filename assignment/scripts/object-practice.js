console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

// objects are wonderful for storing multiple info associated with a user, kind of like an AD profile
let user = [] //as an array it would get very complex with enough enough, instead we can use curly braces with labels on each value with a colon
let userInfo = {
  id: 234, //ID is a key and 234 is a value. keys are strings
  firstName: 'Anne',
  role: 'admin'
};
// objects can be almost anything: functions booleans arrays 
// to get the value out we can do the following

console.log(userInfo);
console.log(userInfo['firstName'])

let foods = ['apples', 'oranges', 'bahn mi']
//anything that is not a primitive value in javascript is an object. Functions, Dom are all objects you can access named properites on them
console.log(foods)
console.log(foods.length)


console.log(userInfo.role);

console.log(console)

JSON.stringify(userInfo)

//setting properites 

userInfo.firstName = 'Annabel';
console.log(userInfo);

userInfo.lastName = 'Lee';

//properites work alot like variables. similar naming rules. Properties are inherintly tied to the object which is assinged to a variable and does not use let

let user2 = {
  middleName: 'Sue',
  firstName: 'Bob',
  ...userInfo
};
console.log(user2) 

// This is a shallow copy that smooshes the two objects together using ... which is spread, it spreads it out like butter into something

let mapPin = {
  location: {
    lat: 45,
    long: -95
  },
  visitors: ['Annabel', 'Bob', 'Jubba'],
  isScenic: true,
  neighborhood: null,
  // greet: () => {
  //   console.log('Hello from my favorite spot!');
  // }
}

//mapPin.greet();
// This is called a method

console.log(mapPin.location.lat);

let pinMatrix = [
  [null, mapPin]
]

console.log(pinMatrix[0][1].visitors[1]);

// let pin2 = { ...mapPin }
// this spread does a shallow clone of mapPin. use structured clone so that the cloned properity if mutated in teh console doesn't think the original is the clones mutate
let pin2 = structuredClone(mapPin);



// how do you check if a property exists?

//userInfo.middleName = 'elisabeth';

if (userInfo.middleName === undefined) {
  console.log(user.middleName);
} else {
  console.log('No middle name!');
}

if (Object.hasOwn(userInfo, 'middleName')) {
  console.log(user.middleName);
} else {
  console.log('No middle name!');
}

//propertiy existance ^

// how do you loop over an object? Turn it into an array!


//Object.keys
//Object.values//thesse will give you all array of keys or an array of values

console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));

let userValues = Object.values(user);

for (let val of Object.values(userInfo)){
  console.log('This is a val:', val);
}


// for (let key in userInfo) {
//   console.log('This is a key:', key);
// } for of is a replaceimen for for in, for of goes over array values.
//for in goes traveling up prototype chain, can loop over stuff you don't want to. Use for of because it does not go up the prototype chain

// prototype chain: it is how javascript does inhertance. it is patterned with Object Oriented programming. 
// A property is a value in an array as an example

// use . notation for accessing all over teh place and bracket notion, though you would use this as the javascript expression wehre as afte the dot it has to be specific

for (let key of Object.keys(userInfo)){
  console.log('This is a key', key);
  console.log('this is the value:', userInfo[key])//key is not math, or variable expression, it's too complicated like an equation. instead use []
}

console.log(foods[0], foods[1], foods[2])
//is the same as
console.log(...foods)

