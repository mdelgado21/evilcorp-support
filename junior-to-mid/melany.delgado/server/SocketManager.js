const io = require('.').io;

const { MongoDB } = require('./mongodb');
const { createMessage, getMessageModel } = require('./Factories');
const {
  VERIFY_USER,
  USER_CONNECTED,
  LOGOUT,
  USER_DECLINED,
  MESSAGE_SENT,
  TYPING,
  MESSAGE_RECIEVED,
  USER_ACCEPTED,
  END_SESSION
} = require('../src/common/Events');
const {
  verifyUser,
  userConnected,
  userDisconnected,
  userDeclined,
  endSession,
  userAccepted
} = require('./SocketFunctions');

module.exports = function(socket) {
  console.log('socket id' + socket.id);
  let sendMessageToChatFromUser;
  let sendTypingFromUser;

  socket.on(VERIFY_USER, ({ nickname, type }, callback) => {
    verifyUser(socket, { nickname, type }, callback);
  });

  socket.on(USER_CONNECTED, user => {
    userConnected(socket, user);
    sendMessageToChatFromUser = sendMessageToChat(user);
    sendTypingFromUser = sendTypingToChat(user);
  });

  socket.on('disconnect', () => {
    if ('user' in socket) {
      userDisconnected(socket);
    }
  });

  socket.on(LOGOUT, () => {
    userDisconnected(socket);
  });

  socket.on(USER_DECLINED, userDeclined);

  socket.on(END_SESSION, endSession);

  socket.on(MESSAGE_SENT, ({ chatId, message }) => {
    sendMessageToChatFromUser(chatId, message);
  });

  socket.on(TYPING, ({ chatId, isTyping }) => {
    sendTypingFromUser(chatId, isTyping);
  });

  socket.on(USER_ACCEPTED, ({ receiver, sender, hasChat }) => {
    userAccepted(socket, { receiver, sender, hasChat });
  });

  const sendMessageToChat = sender => {
    return (chatId, message) => {
      let messageModel = getMessageModel(chatId, message, sender);
      MongoDB.insertCollection('messages', messageModel);
      io.emit(
        `${MESSAGE_RECIEVED}-${chatId}`,
        createMessage({ message, sender })
      );
    };
  };

  const sendTypingToChat = user => {
    return (chatId, isTyping) => {
      io.emit(`${TYPING}-${chatId}`, { user, isTyping });
    };
  };
};
