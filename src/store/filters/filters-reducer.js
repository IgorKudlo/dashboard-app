import {defaultMergeProps} from 'react-redux/lib/connect/mergeProps';
import {ADD_FILTER, CLEAR_FILTER} from './filters-actions';

export const filterReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_FILTER: {
            return [...state, payload.filter];
        }
        case CLEAR_FILTER: {
            return state.filter(item => item !== payload.filter)
        }
        default: {
            return state;
        }
    }
}