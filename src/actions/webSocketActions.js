import { REMOVE_WEB_SOCKET, SET_WEB_SOCKET } from '../ActionTypes';

export const setWebSocket = (ws) => ({
  type: SET_WEB_SOCKET,
  ws,
});

export const removeWebSocket = (ws) => ({
  type: REMOVE_WEB_SOCKET,
});