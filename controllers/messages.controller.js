const path = require('path');

function getMessage(req, res) {
  res.render('message', {
    title: 'Message to my friend',
    friend: 'my friend!',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'ski.jpeg'));
}
function postMessage(req, res) {
  console.log('Updating message...');
}

module.exports = {
  getMessage,
  postMessage,
};
