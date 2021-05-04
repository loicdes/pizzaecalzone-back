
const express = require('express')
const bodyParser = require('body-parser')
const DASHBOARD = require('./dashboard/index')
const COMMANDE = require('./commande/index')


const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json({limit: '10mb', extended: true}))

app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:4200', 'https://pizzaecalzones.herokuapp.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
      // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', origin);
    }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();})
  .get('/dashboard', DASHBOARD.getData)
  .post('/commande', COMMANDE.creerCommande)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  .setTimeout(10000)