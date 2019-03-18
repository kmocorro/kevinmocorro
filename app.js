let express = require('express');
let app = express();

let apiController = require('./controllers/apiController');

let cookieParser = require('cookie-parser');
let port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(cookieParser());

apiController(app);
app.listen(port);
