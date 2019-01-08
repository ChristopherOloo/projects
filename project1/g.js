// learning javasript

console.log('I am learning the basics');
console.log('Hello Chris');

const name = ' Chris Ghud Ghuru';
let pname = 'CEO';
let jname = 'professor';
console.log(name);
console.log(pname);
console.log(jname);

//creating objects
let person = {
  name:'Ghud Ghuru',
  age: 28
};

console.log(person);

//using dot notation to access propertyof an object

person.age = 30;
console.log(person);
console.log(person.name);

//can also use brackets notation
person['name'] = 'COO';
console.log(person['name']);

//arrays

let friends = ['chris','Erii'];
friends[2] = 'Jeunice';
friends[3] = 'Xavi';
friends[4] = 89;
console.log(friends);
console.log(friends.length);

//functions
function greet(post,name) {
  alert('Want to Continue  ' + post+ ' ' + name);
  console.log('Hi  ' + name);
  console.log('Want ' + post +' ' + name);
  
}
greet('Sir' , 'Colins');

function square(number) {
  return number*number;
  
}

console.log('floor number' + square(19));

//for loop
for (let i = 0; i < 4; i++) {
  console.log("I have " +i + " phones");
  
}

//while loop
var p = 25;
while (p<30) {
  console.log(p);
  p++;
}

var numbers = [70,84,91,96,18,7];
numbers.forEach(function(namba){
  console.log(namba);
});

//switch statements
var fruits = 'oranges';

switch (fruits) {
  case "bananas":
    alert('bananas are nutritious');
    
    break;
  case "oranges":
    alert('I love oranges');
    break;

  default:('I love all fruits');
    break;
}