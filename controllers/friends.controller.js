const friends = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      errors: 'Missing friend name',
    });
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const friendId = req.params.friendId;
  if (friends[friendId]) {
    res.status(200).json(friends[friendId]);
  } else {
    res.status(404).json({
      error: 'Friend not found',
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
