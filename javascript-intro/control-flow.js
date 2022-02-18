const determinant = true;

// if-clause is a function that takes a JS expression
// and chooses the if-path iff the expression evaluates to a "truthy" value
if (determinant) {
  console.log('happy path :D');
} else {
  console.log('sad path :/');
}

// if-clause expressions can be negated with the bang operator (!)
if (!determinant) {
  console.log('happy path with negation :D');
} else {
  console.log('sad path with negation :/');
}

// multiple if-else can be chained
const valueOne = false;
const valueTwo = 7;
const valueThree = [];
const valueFour = '';

if (valueOne) {
  console.log('inside first if-path');
} else if (valueFour) {
  console.log('inside second if-path');
} else if (!Array.isArray(valueThree)) {
  console.log('inside third if-path');
} else {
  console.log(`reached valueTwo: ${valueTwo}`);
}

// switch lets us control flow for many options
const dog = {
  name: 'lily',
  age: 2,
  favoriteToys: ['kong', 'reindeer', 'ropey-toy'],
};

switch (true) {
  case dog.name === 'lily':
    console.log('dog name match detected!');
    break;
  case dog.name === 'spartacus':
    console.log('dog name match detected!');
    break;
  case dog.age >= 2:
    console.log('dog is at least two years old!');
    break;
  case dog.age < 2:
    console.log('dog is younger than two years :D');
    break;
  case dog.favoriteToys[0] === 'kong':
    console.log("first fav toy is 'kong'!");
    break;
  case dog.favoriteToys.includes('reindeer'):
    console.log('reindeer found!');
    break;
  case dog.favoriteToys.includes('octopus'):
    console.log('octopus found!');
    break;
  default:
    console.log('none of these options matched');
}

// ternary lets us control flow by making an a:b decision
// syntax is: conditional expression ? true condition : false condition
const dogIsPuppy = dog.age < 3 ? 'puppers' : 'old doggie';
console.log(dogIsPuppy); // puppers

// if we simply need to return a boolean, we don't need a ternary statement
const dogFavoriteToysIncludesHamburger = dog.favoriteToys.includes('hamburger'); // false
console.log(dogFavoriteToysIncludesHamburger); // false
