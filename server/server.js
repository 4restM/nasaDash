const express = require('express');
const chalk = require('chalk');
//const http = require('http'); // not needed?
const Promise = require('bluebird');
const https = require('https');

// require('./routes/routes.js')(app, express);

const app = express();

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(chalk.cyan(`server is now listening on port: ${port}`));
})

//Query Nasa Promise, in Node.
// const options = {
//   host: 'https://api.nasa.gov/planetary/apod?api_key=BmdjxT0wDG093ZC0qM4cihqZMnGvVC22MUiQ4esB'
// }

const queryNasaApi = () => {
  console.log(`queryNasaApi is primed`);
  return new Promise((resolve,reject) =>{
    console.log(`queryNasaApi is firing`);
    return https.request('https://api.nasa.gov/planetary/apod?api_key=BmdjxT0wDG093ZC0qM4cihqZMnGvVC22MUiQ4esB', res =>{
      console.log(`queryNasaApi has fired`);
      res.setEncoding('utf8');
      res.on('data', data => {
        console.log(chalk.yellow(`this is the response from nasa ${data}`))
        resolve(data);
      })
    }).end()
  })
}



//begining route, will move.
app.use('/', express.static(__dirname + '/../client'))

app.get('/', (req,res) => {
    queryNasaApi().then(response => {
      console.log(chalk.green(`queryNasaApi promise is firing - result: ${response}`))
      res.end(response);
    })
  });

app.get('/api/dash', queryNasaApi)
