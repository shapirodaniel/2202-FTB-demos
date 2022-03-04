// import-export syntax lets us consider certain values and functions "private"
// to the file they're used in
// in other words, getRandomFact() is only available within the context of Main.js
// which makes sense: only the default export "needs" to use it! :)
async function getRandomFact() {
  try {
    // fetch is a browser API that lets us make AJAX requests to remote servers
    const response = await fetch(
      // this URL points to a random data object in JSON form
      `https://uselessfacts.jsph.pl/random.json?language=en`
    );

    // .json() is a function built into the fetch() API's response object
    // it resolves the ReadableStream into actual data we can deal with :)
    // we're destructuring the "text" field since we don't need the rest
    // of the data supplied
    const { text } = await response.json();

    return text;
  } catch (err) {
    console.error;
  }
}

export default async (username) => {
  try {
    const text = await getRandomFact();

    const welcome = `
    <section>
      <h1> Welcome, ${username}!</h1>
      <h2>Here's a random fact for you!</h2>
      <div id="random-fact">${text}</div>
    </section>
  `;

    return welcome;
  } catch (err) {
    console.error(err);
  }
};
