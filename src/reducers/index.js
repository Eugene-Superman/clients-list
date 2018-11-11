import { ADD_CLIENTS, SELECT_CLIENT } from '../constants/action-types';

const initialState = {
    clients: [],
    clientIndex: null,
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
        default: 
            return state;
    }
}
