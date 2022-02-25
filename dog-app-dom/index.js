//////////////////////////////
/* BEFORE MODIFYING THE DOM */
//////////////////////////////

// .getElementById() selects an existing DOM node by its id attribute
const dogList = document.getElementById('dog-list');

// calling console.log on an HTMLElement yields the DOM markup
console.log('before modifying the DOM, dogList container');
console.log(dogList);

// calling console.dir on an HTMLElement yields its subtree (attribute nodes, event handlers, etc)
console.log('before modifying the DOM, dogList container');
console.dir(dogList, { depth: null });

// most DOM nodes have an innerHTML property that gives you access to the node's internal markup or subtree
function logInnerHTML(element) {
  console.log(JSON.stringify(element.innerHTML, null, 2));
}

// before modifying the DOM, the dogList has no children, so stringifying and logging its innerHTML returns an empty string
console.log('before modifying the DOM, dogList.innerHTML');
logInnerHTML(dogList);

// this function takes in a url, creates a new img tag
// and modifies the tag by adding the "dog" class as well as
// attaching the url to the img tag's src attribute
// finally, it calls the .appendChild() method on an existing DOM node, dogList
// and adds the new img directly after dogList's last child
function addDog(url) {
  const newImg = document.createElement('img');
  newImg.classList.add('dog');
  newImg.src = url;
  dogList.appendChild(newImg);
}

function buildDogList() {
  // an array of urls that point to dog images :D
  const dogs = [
    'https://images.dog.ceo/breeds/terrier-dandie/n02096437_1678.jpg',
    'https://images.dog.ceo/breeds/shihtzu/n02086240_3493.jpg',
    'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2596.jpg',
    'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_954.jpg',
    'https://images.dog.ceo/breeds/mastiff-english/1.jpg',
    'https://images.dog.ceo/breeds/affenpinscher/n02110627_8071.jpg',
    'https://images.dog.ceo/breeds/chow/n02112137_8410.jpg',
    'https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg',
    'https://images.dog.ceo/breeds/spaniel-irish/n02102973_2295.jpg',
    'https://images.dog.ceo/breeds/terrier-dandie/n02096437_6.jpg',
    'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_4322.jpg',
    'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_3046.jpg',
    'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4131.jpg',
    'https://images.dog.ceo/breeds/terrier-australian/n02096294_987.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_6035.jpg',
    'https://images.dog.ceo/breeds/shihtzu/n02086240_1370.jpg',
    'https://images.dog.ceo/breeds/stbernard/n02109525_7016.jpg',
    'https://images.dog.ceo/breeds/coonhound/n02089078_502.jpg',
  ];

  for (const dog of dogs) {
    addDog(dog);
  }
}

////////////////
/* MODIFY DOM */
////////////////
buildDogList();

// .addEventListener() takes two arguments (optionally 3, but we'll ignore the third parameter for now...)
// a string that refers to an event type, like 'click', 'mouseover', 'DOMContentLoaded', etc.
// and a callback function that runs when the event is triggered
// we can use a function-keyword fn to leverage "this", which will point to the node itself
// or we can use an arrow function and use the node reference by name

// here, we'll DELEGATE the click event on a dog image
// by letting it BUBBLE up to the dogList element, where we'll attach the eventListener
// from there, we'll check for the event's Target (EventTarget), which is the node that received the 'click' event / action
// and use that to apply a "selected" class, which will apply CSS styling
dogList.addEventListener('click', (event) => {
  console.log(event);
  console.log('event target is: ', event.target);

  // the classList object is a DOMTokenList
  // it has a few built-in methods for manipulating the classes applied to a node
  // we'll leverage the .toggle() method to add or remove a "selected" class,
  // which will modify the CSS for the event target
  console.log(event.target.classList);
  event.target.classList.toggle('selected');
});

// there are built-in DOM methods for grabbing certain kinds of info
// here, we're grabbing all elements with the "dog" class
const elementsWithDogTag = document.getElementsByClassName('dog');
console.log(elementsWithDogTag);

// .querySelectorAll() returns a list of DOM elements
// this is NOT an active list: modifying the list won't change the DOM
// it receives a single parameter, a valid CSS selector string, comma-separated
// for example, '.dog > span.active, body > div'
// here, we're selecting all elements with the "dog" class
// this returns the same collection as the .getElementsByClassName() call above
const dogImages = document.querySelectorAll('.dog');
console.log(dogImages);

// logging the innerHTML of dogList after adding dog images
logInnerHTML(dogList);
