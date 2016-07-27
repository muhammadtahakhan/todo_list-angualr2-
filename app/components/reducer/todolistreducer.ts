import { ActionReducer, Action } from '@ngrx/store';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const todolistReducer: ActionReducer<Date> = (state : any = [], {type, payload})=> {
    
    switch(type){
        case ADD:
          return [...state, payload];

        case UPDATE:
           return payload;

       case DELETE:
           return payload;    

        default:
           return [...state];

    }

};