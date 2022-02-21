// debugging 101
// run code, read stack trace, fix current error
// rinse and repeat until outcome is what you expect

function printEvenLetters(myString) {
  for (let i = 0; i < myString.length; i++) {
    // the mod or modulo operator
    // subtracts the right value from the left
    // until it can't do a whole number subtraction
    // and it returns the remainder
    // 2 % 2 === 0
    // 5 % 3 === 2

    // === negated is !==
    // == negated is !=

    // myString is 'hi'
    // myString.length === 2
    // myString.length - 1 === 1
    // if i want to log both letters, what should i iterate up to?
    /* 
      for (let i = 0; i < myString.length; i++){
        console.log(myString[i])
      } 
    */

    if (i % 2 === 1) {
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
