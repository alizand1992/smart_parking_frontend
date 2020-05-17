import { REMOVE_WEB_SOCKET, SET_WEB_SOCKET } from '../ActionTypes';

export const webSocketReducer = (state = {}, action) => {
  switch (action.type) {
  case SET_WEB_SOCKET:
    return {
      ...state,
      ws: action.ws,
    };

  case REMOVE_WEB_SOCKET:
    console.log(state.ws);
    state.ws.send('{ "action": "disconnect" }', {}, () => {});
    return {
      ...state,
      ws: undefined,
    };

  default:
    return state;
  }
};