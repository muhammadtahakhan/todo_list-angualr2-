import { Injectable } from '@angular/core';

@Injectable()
/**
 * todosSer
 */
export class TodosService {
    list;
    constructor() {
        
    }
    gettodos(){
       return this.list = ['one', 'two', 'three', 'four'];
    }
}