const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.routers');
const messagesRouter = require('./routes/messages.routers');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Ski mountain',
    caption: 'Great view!!',
  });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});