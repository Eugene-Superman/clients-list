import { ADD_CLIENT } from '../constants/action-types';

export const addClient = client => ({ type: ADD_CLIENT, payload: client })