import { ORDERS } from '../actions/types';

const orderdata = []

export const orderReducer = (state = orderdata, action) => {
    switch (action.type) {

        case ORDERS:
            return action.payload

        default:
            return state;
    }
}

