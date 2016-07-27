import { Component, EventEmitter } from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD, UPDATE, DELETE} from './../reducer/todolistreducer';
import {TodosService} from './../../services/todos.service';


@Component({
  selector: 'todos',
  template: `<h1>todolist</h1>
            inter todo:  <input type="text" #item/>
            <button (click)="addtodo(item)">Add</button>
              <ul>
              <li *ngFor="#item of todos | async" >
              {{item}}
              </li>
              </ul>`,
 })
export class TodosComponent {
 
 public todos:any;
 

constructor(public store: Store<any>){
     this.todos = store.select('todolist');
    //  this.todos.subscribe(action => console.log(action));
   }


 addtodo(todoitem){
   this.store.dispatch({type: 'ADD', payload: todoitem.value});
    // this.store.dispatch({ type: ADD });
  //  this.todos.push(todoitem.value);
 }


deletetodo(deleteitem){
  this.todos.splice(deleteitem, 1);
}

 }
