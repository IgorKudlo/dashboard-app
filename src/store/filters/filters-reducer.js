import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from './filters-actions';

export const filterReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_FILTER: {
            if (!state.includes(payload.filter)) {
                return [...state, payload.filter];
            }
            return state;
        }
        case REMOVE_FILTER: {
            return state.filter(item => item !== payload.filter)
        }
        case CLEAR_FILTER: {
            return [];
        }
        default: {
            return state;
        }
    }
}