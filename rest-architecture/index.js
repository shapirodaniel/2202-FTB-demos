const express = require('express');
const app = express();
const PORT = 4000;
const morgan = require('morgan');
const apiRouter = require('./routes');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRouter);

// this route catches any request that wasn't handled by our apiRouter
app.use('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
