import { Form_Submit } from '../actions/types';

const data = []

export const formReducer = (state = data, action) => {
    switch (action.type) {

        case Form_Submit: return action.payload
    
        
        default: return state;
    }
}

