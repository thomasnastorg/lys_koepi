const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 8080;

const app = express();
app.get('/', (req, res) => {
  const html = fs.readFileSync(__dirname+"/html/index.html", "utf-8");
  res.send(html);
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});