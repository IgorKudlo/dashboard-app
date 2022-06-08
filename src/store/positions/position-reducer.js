import {ADD_POSITIONS} from './position-actions';

export const positionReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_POSITIONS: {
            return payload.positions;
        }
        default: {
            return state;
        }
    }
}