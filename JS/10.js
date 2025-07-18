// Write your code below
let vacationSpots = ['Spain', 'France', 'Philippines'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Write your code below
for (let i = 5; i<11; i++) {
    console.log(i);
};
  
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
};

const vacationSpots2 = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i< vacationSpots2.length; i++) {
  console.log('I would love to visit ' + vacationSpots2[i]);
};

// Write your code below
const bobsFollowers = ['He', 'Has', 'No', 'Followers'];
const tinasFollowers = ['She', 'Has', 'Followers'];

const mutualFollowers = [];

for (let i = 0; i<bobsFollowers.length; i++){
  for (let j = 0; j<tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    };
  };
};

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};


// Write your code below
let cupsOfSugarNeeded = 100;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  };
};
console.log('And if you don\'t know, now you know.');

