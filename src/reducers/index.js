import { ADD_CLIENTS, SELECT_CLIENT, SEARCH_ITEM } from '../constants/action-types';

const initialState = {
    clients: [],
    clientIndex: null,
    clientToSearch: '',
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };
        case SELECT_CLIENT:
            return {
                ...state,
                clientIndex: action.payload
            };
        case SEARCH_ITEM:
            return {
                ...state,
                clientToSearch: action.payload
            };
        default: 
            return state;
    }
}
