import { ADD_CLIENTS } from '../constants/action-types';

const initialState = {
    clients: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CLIENTS:
            return {
                ...state,
                clients: action.payload
            };
        default: 
            return state;
    }
}
