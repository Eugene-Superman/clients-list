import { ADD_CLIENTS, SELECT_CLIENT } from '../constants/action-types';

export const addClients = clients => ({ type: ADD_CLIENTS, payload: clients })
export const selectClient = index => ({ type: SELECT_CLIENT, payload: index })