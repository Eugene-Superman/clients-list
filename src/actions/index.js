import { ADD_CLIENTS, SELECT_CLIENT, SEARCH_ITEM } from '../constants/action-types';

export const addClients = clients => ({ type: ADD_CLIENTS, payload: clients });
export const selectClient = identificator => ({ type: SELECT_CLIENT, payload: identificator });
export const searchClient = serchQuery => ({ type: SEARCH_ITEM, payload: serchQuery });