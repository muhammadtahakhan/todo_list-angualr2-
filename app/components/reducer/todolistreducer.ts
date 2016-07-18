import { ActionReducer, Action } from '@ngrx/store';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const todolistReducer: ActionReducer<Date> = (state = new Date(), action: Action)=> {
    const date = new Date(state.getTime());
    switch(action.type){
        case ADD:
            date.setSeconds(date.getSeconds() + 1);
            return date;

        case UPDATE:
            date.setHours(date.getHours() + 1);
            return date;

       case DELETE:
            date.setHours(date.getHours() + 1);
            return date;     

        default:
            return state;

    }

};