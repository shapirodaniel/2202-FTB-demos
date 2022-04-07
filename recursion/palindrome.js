// find out if an input word is a palindrome
// words that converge on a single char, or no chars
// where each "mirrored" char is the same
// 'aabaa' -> true, 'aaba' -> false
// '' -> true, 'c' -> true
// 'Aabaa' -> true
// to handle this case we'll probably need to preprocess our input

function isPalindrome(word) {
  // preprocessing our input
  word = word.toLowerCase();

  // base case
  if (word.length === 0 || word.length === 1) {
    return true;
  }

  // recursive case
  // if the outermost letters don't match, return false
  if (word.charAt(0) !== word[word.length - 1]) {
    return false;
  }

  return isPalindrome(word.slice(1, -1));
}

console.log(isPalindrome('aabaa')); // true
console.log(isPalindrome('aaba')); // false
console.log(isPalindrome('')); // true
console.log(isPalindrome('d')); // true
console.log(isPalindrome('Aabaa')); // true
console.log(isPalindrome('$% ^%$')); // true

isPalindrome('Aba');
// preprocessing -> 'aba'
// base case is not triggered as 3 > 1 || 0
// if 'a' !== 'a', this is not true, we don't enter that if-block
// isPalindrome('aba'.slice(1, -1) -> 'b')
// preprocessing -> 'b'
// base case IS triggered as 'b'.length === 1
// return true :)

/* alternate O(1) space optimized solution */

function isPalindromeOptimizedForSpace(word, start = 0, end = word.length - 1) {
  // preprocessing our input
  word = word.toLowerCase();

  // base case
  if (start - end === 0 || start - end === 1) {
    return true;
  }

  // recursive case
  // if the outermost letters don't match, return false
  if (word[start] !== word[end]) {
    return false;
  }

  // O(ptimization) -> we could supply variables that point to the indices
  // we want to evaluate
  // now we've got O(1) space, we're no longer making copies of the word
  // over and over again :)
  return isPalindromeOptimizedForSpace(word, ++start, --end);
}

console.log(isPalindromeOptimizedForSpace('aabaa')); // true
console.log(isPalindromeOptimizedForSpace('aaba')); // false
console.log(isPalindromeOptimizedForSpace('')); // true
console.log(isPalindromeOptimizedForSpace('d')); // true
console.log(isPalindromeOptimizedForSpace('Aabaa')); // true
console.log(isPalindromeOptimizedForSpace('$% ^%$')); // true
