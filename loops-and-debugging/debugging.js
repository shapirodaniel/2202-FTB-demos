// debugging 101
// run code, read stack trace, fix current error
// rinse and repeat until outcome is what you expect

function printEvenLetters(myString) {
  for (const i = 0; i < myString.length - 1; i++) {
    if (i % 2 === 0) {
      console.log(`index is: ${i}`);
      console.log(myString[i]);
    }
  }
}

printEvenLetters('hello world!');
// should print
/* 
  index is: 1
  e
  index is: 3
  l
  index is: 5
  
  index is: 7
  o
  index is: 9
  l
  index is: 11
  !
*/
