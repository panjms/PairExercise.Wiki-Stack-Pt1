const express = require("express");
const morgan = require("morgan");
const index = require("./views/index");
const main = require("./views/main")

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log('Hello World')
  res.send(main());
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
