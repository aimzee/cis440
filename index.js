const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express : app
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('login.html')
})

// router.get('/main', function(req, res) {
//     res.sendFile(path.join(__dirname+'/main.html'));
// })

app.use('/', router);
app.listen(3000)
console.log('Running on Port 3000')