import config, { logStars } from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.get('/', (req, res) => {
  res.render('index',
  { content: 'Hello Express and <em>EJS</em>!' });
});

server.set('view engine', 'ejs');

//server.use is middleware for use with static
server.use(express.static('public'));

server.use('/api', apiRouter);

server.get('/about.html', (req, res) => {
  res.send('<h1>The About page</h1>');
})

server.listen(config.port, () => {
  //console.info('Express listening on port ', config.port)
  logStars('Express listening on port ' + config.port);
});
