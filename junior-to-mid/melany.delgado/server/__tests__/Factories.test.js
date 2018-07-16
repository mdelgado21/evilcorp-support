const {
  createUser,
  createMessage,
  getTime,
  createChat,
  getMessageModel,
  getChatModel
} = require('../Factories');

describe('Factories', () => {
  it('Create User', () => {
    let expectedUser = createUser({
      name: 'Melany',
      socketId: 'UID-123',
      type: 'Support'
    });

    expect(expectedUser.name).toBe('Melany');
    expect(expectedUser.socketId).toBe('UID-123');
    expect(expectedUser.type).toBe('Support');
    expect(expectedUser.accepted).toBeFalsy();
    expect(expectedUser.id).toBeTruthy();
  });

  it('Create Message', () => {
    let expectedMessage = createMessage({
      message: 'Hola',
      sender: { id: 'test-id' }
    });

    expect(expectedMessage.message).toBe('Hola');
    expect(expectedMessage.sender).toEqual({ id: 'test-id' });
    expect(expectedMessage.id).toBeTruthy();
    expect(expectedMessage.time).toBeTruthy();
  });

  it('Get Time', () => {
    let time = getTime(new Date(1531275945));
    expect(time).toBe('11:21');
  });

  it('Create Chat', () => {
    let expectedChat = createChat({
      messages: ['hola', 'puedo ayudarle?'],
      name: 'Melany & Support',
      users: [{ name: 'Melany' }, { name: 'Support' }]
    });

    expect(expectedChat.messages).toEqual(['hola', 'puedo ayudarle?']);
    expect(expectedChat.name).toBe('Melany & Support');
    expect(expectedChat.id).toBeTruthy();
    expect(expectedChat.users).toEqual([
      { name: 'Melany' },
      { name: 'Support' }
    ]);
    expect(expectedChat.typingUsers).toEqual([]);
  });

  it('Get Message Model', () => {
    let messageModel = getMessageModel('chat-id', 'message', {
      id: 'id',
      name: 'Melany',
      socketId: 'socket-id',
      type: 'Customer User',
      accepted: true
    });

    expect(messageModel.chat_id).toBe('chat-id');
    expect(messageModel.message).toBe('message');
    expect(messageModel.date).toBeTruthy();
    expect(messageModel.sender.id).toBe('id');
    expect(messageModel.sender.name).toBe('Melany');
    expect(messageModel.sender.type).toBe('Customer User');
  });

  it('Get Chat Model', () => {
    let chatModel = getChatModel({
      id: 'chat-id',
      name: 'Support & Melany',
      messages: ['hola', 'puedo ayudarle?'],
      users: [{ id: 'user-1' }, { id: 'user-2' }],
      typingUsers: []
    });

    expect(chatModel.id).toBe('chat-id');
    expect(chatModel.users.length).toBe(2);
  });
});
