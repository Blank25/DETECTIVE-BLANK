const express = require('express');

// App set up
const app = express();

app.get('/', (req, res) => {
  res.sendFile("Public/index.html", {root: __dirname});
})
app.use(express.static('Public'));

// Listen
app.listen(3000, () => console.log('started'));