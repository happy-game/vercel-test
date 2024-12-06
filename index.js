const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/', (req, res) => {

  const message = process.env.MESSAGE || 'no message';
  res.json({ message });
});

const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

module.exports = app; 