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
              <li *ngFor="let item of todos | async" >
              {{item.todo}}
              {{item.id}}<button (click)='deletetodo(item.id)' >Delete</button>
              </li>
              </ul>`,
 })
export class TodosComponent {
 
 public todos:any;
 private id: number = 0;

constructor(public store: Store<any>){
     this.todos = store.select('todolist');
    //  this.todos.subscribe(action => console.log(action));
   }


 addtodo(todoitem){
   this.store.dispatch({type: 'ADD', payload:{id:++this.id, todo:todoitem.value} });
    // this.store.dispatch({ type: ADD });
  //  this.todos.push(todoitem.value);
 }


deletetodo(id){
  console.log(id);
  this.store.dispatch({type: 'DELETE', payload:id });
}

 }
