const uuidv4 = require('uuid/v4');

const createUser = ({ name = '', socketId = null, type = '' } = {}) => ({
  id: uuidv4(),
  name,
  socketId,
  type,
  accepted: false
});

const createMessage = ({ message = '', sender = {} } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender
});

const getTime = date => {
  return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
};

const createChat = ({ messages = [], name = '', users = [] } = {}) => ({
  id: uuidv4(),
  name: createChatNameFromUsers(users),
  messages,
  users,
  typingUsers: []
});

const createChatNameFromUsers = users => {
  return users.map(u => u.name).join(' & ');
};

const getMessageModel = (chatId, message, sender) => ({
  chat_id: chatId,
  message,
  date: Date.now(),
  sender: getUserModel(sender)
});

const getUserModel = user => ({
  id: user.id,
  name: user.name,
  type: user.type
});

const getChatModel = chat => {
  let users = chat.users.map(user => getUserModel(user));
  return {
    id: chat.id,
    users: users
  };
};

module.exports = {
  createUser,
  createChat,
  createMessage,
  createChatNameFromUsers,
  getMessageModel,
  getChatModel,
  getTime
};
