const hobbies = ['one', 'two', 'three'];

console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Dishes', 'Mopping');

console.log(chores);

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores2.pop();

console.log(chores2);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => {
  newArr.pop();
};

removeElement(concept);
console.log(concept);

const numberClusters = [[1,2],[3,4],[5,6]];

const target = numberClusters[2][1];
console.log(target);
