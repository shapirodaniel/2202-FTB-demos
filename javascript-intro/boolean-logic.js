// logical OR returns the first truthy value or the last falsy value
console.log(false || 'yes' || 200); // yes, execution stops before 200
console.log(false || null || undefined || NaN); // NaN

// logical AND returns the first falsy value or the last truthy value
console.log(true && null && 'pizza'); // null, execution stops before 'pizza'
console.log(true && 1 && 'pizza' && ['apple', 'pie']); // ['apple', 'pie']

// super useful for conditional statements
const isArray = (arr) => Array.isArray(arr);
const includesPizza = (arr) => arr.includes('pizza');

const lunchOptions = ['hamburgers', 'pizza'];

if (isArray(lunchOptions) && includesPizza(lunchOptions)) {
  console.log('lunch options are an array that includes pizza!');
}

const malformedLunchOptions = [{ pizza: true }, { hamburgers: true }];

if (!isArray(malformedLunchOptions) || !includesPizza(malformedLunchOptions)) {
  /* this block only runs if either/both is/are false! */
  throw new Error(
    'either lunchOptions is not an array, or lunchOptions does not include pizza'
  );
}
