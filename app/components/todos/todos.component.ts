import { Component, EventEmitter } from '@angular/core';
import {TodosService} from './../../services/todos.service';


@Component({
  selector: 'todos',
  template: `<h1>todolist</h1>
            inter todo:  <input type="text" #item/>
            <button (click)="addtodo(item)">Add</button>
              <ul>
              <li *ngFor='let items of todos let i=index' >{{items}}  <button (click)="deletetodo(i)">Delete</button></li>
              </ul>`,
 })
export class TodosComponent {
 
 public todos:any;
 

constructor(private todosService:TodosService){
  this.todos = todosService.gettodos();
 
}


 addtodo(todoitem){
   this.todos.push(todoitem.value);
 }


deletetodo(deleteitem){
  this.todos.splice(deleteitem, 1);
}

 }
