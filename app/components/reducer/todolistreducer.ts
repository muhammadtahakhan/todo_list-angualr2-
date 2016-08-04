import { ActionReducer, Action } from '@ngrx/store';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const todolistReducer: ActionReducer<any> = (state : any = [], {type, payload})=> {
    
    switch(type){
        case ADD:
          return [...state, payload];

        case UPDATE:
           return payload;

       case DELETE:
            return state.filter(todo => todo.id !== payload);  

        default:
           return [...state];

    }

};