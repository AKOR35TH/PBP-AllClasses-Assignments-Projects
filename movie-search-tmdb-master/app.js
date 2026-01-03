const express = require('express');
const movieRouter = require('./routes/movie-router');

const app = express();
app.use(express.json());

app.use(movieRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
