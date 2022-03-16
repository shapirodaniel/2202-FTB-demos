const express = require('express');
const app = express();
const PORT = 4000;
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  const html = `
    <html>
      <head>
        <title>my server project</title>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <body>
        <h1>Welcome to my server project! :)</h1>
      </body>
    </html>
  `;

  res.send(html);
});

app.get('/puppies', (req, res, next) => {
  const html = `
    <html>
      <head>
        <title>my server project</title>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <body>
        <h1>This is the puppies route! :)</h1>
        <img src="http://source.unsplash.com/random/300x300?puppies" alt="puppies"/>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
