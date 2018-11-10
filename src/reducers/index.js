import { ADD_CLIENT } from '../constants/action-types';

const initialState = {
    clients: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CLIENT:
            return { ...state, clients: [...state.clients, action.payload] };
        default: 
            return state;
    }
}
