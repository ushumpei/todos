var express = require('express');
var connectBrowserSync = require('connect-browser-sync');
var app = express();

// Development server configurations.
// To change environment, execute command `export NODE_ENV=production` at commandline.
if ( app.get('env') === 'development' ) {
  var browserSync = require('browser-sync');
  var browserSyncConfiguration = { "files": "app/static/*" }
  app.use(connectBrowserSync(browserSync(browserSyncConfiguration)));
}

app.use(express.static(__dirname + '/app/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'app/static/index.html');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
