const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');

const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

const config = require('./config/config.default');
const routers = require('./routers/index');

const { configurationMiddleware, rolesMiddleware } = require('./middlewares/serverMiddlewares')

// connect to database
mongoose.connect(config.database, config.dataOpt);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(chalk.green(`Connecting MongoDB successfully.`));
});

/* configuration */
app.all('*', configurationMiddleware);

// use gzip | ungzip, see doc/nginx.md
app.use(compression());

// cookie
app.use(cookieParser());

// session
app.use(session({
  ...config.sessionOpt,
  store: new MongoStore({
    ...config.mongoStore,
    url: config.database,
  }),
}));

// use body parser so we can get info from POST and/or URL parameters
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// roles
app.use(rolesMiddleware);

// routes
routers(app);

app.listen(config.port, () => {
  console.log(chalk.green(`Successful startup service. Occupancy port number ${config.port}`));
});
