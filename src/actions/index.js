import { ADD_CLIENTS } from '../constants/action-types';

export const addClients = clients => ({ type: ADD_CLIENTS, payload: clients })