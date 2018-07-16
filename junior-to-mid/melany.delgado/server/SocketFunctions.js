const io = require('.').io;
const { values, find } = require('lodash');
const { SUPPORT } = require('../src/common/UserTypes');
const { createUser, createChat, getChatModel } = require('./Factories');
const { MongoDB } = require('./mongodb');
const {
  USER_CONNECTED,
  USER_DISCONNECTED,
  USER_DECLINED,
  USER_ACCEPTED,
  END_SESSION
} = require('../src/common/Events');

let _connectedUsers = {};

const verifyUser = (socket, { nickname, type }, callback) => {
  if (type === SUPPORT) {
    if (!!find(values(_connectedUsers), { type: SUPPORT })) {
      callback({ isRejected: true, user: null });
    } else {
      callback({
        isRejected: false,
        user: createUser({ name: nickname, socketId: socket.id, type })
      });
    }
  } else {
    callback({
      isRejected: false,
      user: createUser({ name: nickname, socketId: socket.id, type })
    });
  }
};

const userConnected = (socket, user) => {
  user.socketId = socket.id;
  socket.user = user;
  _connectedUsers = addUser(_connectedUsers, user);
  io.emit(USER_CONNECTED, _connectedUsers);

  console.log(
    `user connected #${values(_connectedUsers).length}: ${user.id} - ${
      user.name
    }`
  );
};

const userDisconnected = socket => {
  _connectedUsers = removeUser(_connectedUsers, socket.user);
  io.emit(USER_DISCONNECTED, _connectedUsers);

  console.log('Disconnect User', _connectedUsers);
};

const userDeclined = user => {
  _connectedUsers = removeUser(_connectedUsers, user);
  io.emit(USER_DECLINED, user.id);
};

const endSession = user => {
  _connectedUsers = removeUser(_connectedUsers, user);
  io.emit(END_SESSION, _connectedUsers, user.id);
};

const userAccepted = (socket, { receiver, sender, hasChat }) => {
  if (receiver.id in _connectedUsers) {
    const receiverSocket = receiver.socketId;

    if (!hasChat) {
      _connectedUsers[receiver.id].accepted = true;
      let newChat = createChat({
        name: `${receiver.name}&${sender.name}`,
        users: [receiver, sender]
      });
      socket.to(receiverSocket).emit(USER_ACCEPTED, newChat, _connectedUsers);
      let chatModel = getChatModel(newChat);
      MongoDB.insertCollection('chats', chatModel);
      socket.emit(USER_ACCEPTED, newChat, _connectedUsers, receiver.id);
    }
  }
};

const addUser = (userList, user) => {
  let newList = Object.assign({}, userList);
  newList[user.id] = user;
  return newList;
};

const removeUser = (userList, user) => {
  let newList = Object.assign({}, userList);
  delete newList[user.id];
  return newList;
};

module.exports = {
  verifyUser,
  userConnected,
  userDisconnected,
  userDeclined,
  endSession,
  userAccepted
};
