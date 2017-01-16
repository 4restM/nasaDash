const express = require('express');
const chalk = require('chalk')

const app = express();

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(chalk.cyan(`server is now listening on port: ${port}`));
})

//begining route, will move.

app.get('/', (req,res) => {
    res.end('server is working')
  });