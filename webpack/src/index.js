import Main from './components/Main';
import Login from './components/Login';

const ROOT = document.getElementById('root');
ROOT.innerHTML = Login;

const SUBMIT_BTN = document.getElementById('submit-btn');

SUBMIT_BTN.addEventListener('click', async (e) => {
  // prevent form from reloading page on submit btn click
  e.preventDefault();

  const username = document.getElementById('username').value;
  ROOT.removeChild(ROOT.firstElementChild);

  // since the Main function leverages async/await to unpack the values
  // from the getRandomFact async function
  // we'll need to convert our event listener into an async function itself
  // so that we can unpack the value from the Promise that Main() returns!
  const markup = await Main(username);
  ROOT.innerHTML = markup;
});
