/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
users= [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var tyler = new User("Tyler", "tylermcginnis33@gmail.com","iLoveJS");
var cahlan= new User("Cahlan", "cahlan@devmounta.in","iLoveHashtags");
var lenny= new User("Lenny", "lenny@theLenster.com","iLoveLentilSoup");
users.push(tyler,cahlan, lenny);

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
console.log(tyler);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log(lenny);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
var taryn= new User("Taryn", "tg@gmail.com", "password");
users.push(taryn);

//Now loop through your users Array and console.log every users name.

  //code here
for (var prop in users) {
  console.log(this.name);
}
