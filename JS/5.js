let myAge = 999; //this is my age duh
let earlyYears = 2; //this will account for the early years of your life
earlyYears = earlyYears*10;
let laterYears = myAge - 2; //removing the early years from your age
laterYears *=4; //calculating dog years
console.log(earlyYears + laterYears);
myAgeInDogYears = earlyYears + laterYears; //adds earlyYears and laterYears
let myName = 'Jake Peralta'.toLowerCase(); //saves my name in all lower case
//prints out my name, age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);