const { it, expect, describe } = require('@jest/globals');
const { addTwoNumbers, addUnknownNumberOfArgs } = require('./code');

describe('add functions', () => {
  describe('addTwoNumbers', () => {
    it('is a function', () => {
      expect(addTwoNumbers instanceof Function).toBe(true);
    });

    it('returns the sum of its arguments', () => {
      const result = addTwoNumbers(1, 2);
      expect(result).toEqual(3);
    });

    it('throws error if either argument is not of type "number"', () => {
      // try-catch statements allow us to continue to run a program
      // if an error (sometimes called an exception) occurs
      // the catch block receives the error as a paramter
      try {
        addTwoNumbers(1, 'pizza');
      } catch (err) {
        expect(err.message).toBe('value is not a number!');
      }
    });
  });
});
