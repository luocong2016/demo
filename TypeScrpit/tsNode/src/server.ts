import app from './app';
import serverConfig from './config/serverConfig';

app.listen(
  serverConfig.port,
  () => {
    console.log(`Express server listening on port ${serverConfig.port}`);
  }
);


/*
// if https
const httpsOptions = {
  key: fs.readFileSync('./config/key.pem'),
  cert: fs.readFileSync('./config/cert.pem),
};

https.createServer(httpsOptions, app).list(
  serverConfig.port,
  () => {
    console.log(`Express server listening on port ${serverConfig.port}`);
  }
);
*/