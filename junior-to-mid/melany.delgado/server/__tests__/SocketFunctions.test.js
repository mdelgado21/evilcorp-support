const {
  verifyUser,
  userConnected,
  userDisconnected,
  userDeclined,
  endSession,
  userAccepted
} = require('../SocketFunctions');
const io = require('../.');
const { MongoDB } = require('../mongodb');

let socket;
let user;

jest.mock('../.', () => {
  return {
    io: {
      emit: jest.fn((eventName, value) => {
        eventName, value;
      })
    }
  };
});
jest.mock('../mongodb', () => {
  return {
    MongoDB: {
      insertCollection: jest.fn((collection, model) => {
        collection, model;
      })
    }
  };
});
describe('SocketFunctions', () => {
  beforeEach(() => {
    socket = {
      id: 'socket-id',
      to: socket => {
        return {
          emit: jest.fn((eventName, value) => {
            eventName, value;
          })
        };
      },
      emit: jest.fn((eventName, value) => {
        eventName, value;
      })
    };
  });
  describe('Verify User', () => {
    it('should approved the user when is a Costumer', () => {
      verifyUser(
        socket,
        { nickname: 'melany', type: 'Costumer User' },
        ({ user, isRejected }) => {
          expect(user.name).toEqual('melany');
          expect(isRejected).toBeFalsy();
        }
      );
    });

    it('should approve the user when is a Support an anyone is connected as support', () => {
      verifyUser(
        socket,
        { nickname: 'melany-support', type: 'Support User' },
        ({ user, isRejected }) => {
          expect(user.name).toEqual('melany-support');
          expect(isRejected).toBeFalsy();
        }
      );
    });
    it('when user is a support, and already have a support connected,should reject the user', () => {
      user = { id: 'user-id', type: 'Support User' };
      userConnected(socket, user);
      verifyUser(
        socket,
        { nickname: 'melany-support', type: 'Support User' },
        ({ user, isRejected }) => {
          expect(user).toBe(null);
          expect(isRejected).toBeTruthy();
        }
      );
    });
  });
  describe('User Connected', () => {
    let user;
    let expectedUserList = {
      'user-id': { id: 'user-id', socketId: 'socket-id', type: 'Costumer User' }
    };
    beforeEach(() => {
      user = { id: 'user-id', type: 'Costumer User' };
      io.io.emit.mockClear();
    });
    it('should add the user into the connected users and emit USER_CONNECTED event', () => {
      userConnected(socket, user);
      expect(io.io.emit.mock.calls.length).toBe(1);
      expect(io.io.emit.mock.calls[0][0]).toEqual('USER_CONNECTED');
      expect(io.io.emit.mock.calls[0][1]).toEqual(expectedUserList);
    });
  });
  describe('User Disconnected', () => {
    let user;
    let expectedUserList = {
      'user-id': { id: 'user-id', socketId: 'socket-id', type: 'Costumer User' }
    };
    beforeEach(() => {
      user = { id: 'user-id', type: 'Costumer User' };
      userConnected(socket, user);
      io.io.emit.mockClear();
    });
    it('should remove the user from connected users list and emit USER_DISCONNECTED event', () => {
      userDisconnected(socket, user);
      expect(io.io.emit.mock.calls.length).toBe(1);
      expect(io.io.emit.mock.calls[0][0]).toEqual('USER_DISCONNECTED');
      expect(io.io.emit.mock.calls[0][1]).toEqual({});
    });
  });
  describe('User Decline', () => {
    let user;
    beforeEach(() => {
      user = { id: 'decline-user-id', type: 'Costumer User' };
      userConnected(socket, user);
      io.io.emit.mockClear();
    });
    it('should remove the user of connected user list and emit USER_DECLINED event', () => {
      userDeclined(user);
      expect(io.io.emit.mock.calls.length).toBe(1);
      expect(io.io.emit.mock.calls[0][0]).toEqual('USER_DECLINED');
      expect(io.io.emit.mock.calls[0][1]).toEqual('decline-user-id');
    });
  });
  describe('End Session', () => {
    let user;
    beforeEach(() => {
      user = { id: 'end-session-user-id', type: 'Costumer User' };
      userConnected(socket, user);
      io.io.emit.mockClear();
    });
    it('should remove the user of connected user list and emit END_SESSION event', () => {
      endSession(user);
      expect(io.io.emit.mock.calls.length).toBe(1);
      expect(io.io.emit.mock.calls[0][0]).toEqual('END_SESSION');
      expect(io.io.emit.mock.calls[0][1]).toEqual({});
      expect(io.io.emit.mock.calls[0][2]).toEqual('end-session-user-id');
    });
  });
  describe('User Accepted', () => {
    let user;
    beforeEach(() => {
      user = { id: 'accepted-user-id', type: 'Costumer User' };
      userConnected(socket, user);
      io.io.emit.mockClear();
    });
    it('should not emit USER_ACCEPTED event if the receiver is not in connected users', () => {
      userAccepted(socket, {
        receiver: { id: 'other-id' },
        sender: { id: 'support-id' },
        hasChat: false
      });
      expect(io.io.emit.mock.calls.length).toBe(0);
    });
    it('should not emit USER_ACCEPTED event if the receiver is in connected users but has a chat', () => {
      userAccepted(socket, {
        receiver: { id: 'other-id' },
        sender: { id: 'support-id' },
        hasChat: true
      });
      expect(io.io.emit.mock.calls.length).toBe(0);
    });
    it('should emit USER_ACCEPTED event if the receiver is in connected users and has no chat', () => {
      userAccepted(socket, {
        receiver: user,
        sender: { id: 'support-id' },
        hasChat: false
      });
      expect(socket.emit.mock.calls.length).toBe(1);
      expect(socket.emit.mock.calls[0][0]).toEqual('USER_ACCEPTED');
      expect(socket.emit.mock.calls[0][1].messages).toBeTruthy();
      expect(socket.emit.mock.calls[0][2]).toEqual({
        'accepted-user-id': {
          accepted: true,
          id: 'accepted-user-id',
          socketId: 'socket-id',
          type: 'Costumer User'
        }
      });
      expect(socket.emit.mock.calls[0][3]).toEqual('accepted-user-id');
    });
  });
});
