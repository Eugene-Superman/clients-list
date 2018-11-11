import { ADD_CLIENTS, SELECT_CLIENT, SEARCH_ITEM } from '../constants/action-types';

export const addClients = clients => ({ type: ADD_CLIENTS, payload: clients });
export const selectClient = index => ({ type: SELECT_CLIENT, payload: index });
export const searchClient = serchQuery => ({ type: SEARCH_ITEM, payload: serchQuery });