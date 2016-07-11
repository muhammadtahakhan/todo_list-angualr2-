import { Component, EventEmitter } from '@angular/core';
import {TodosService} from './../../services/todos.service';


@Component({
  selector: 'todos',
  template: `<h1>todolist</h1>
            inter todo:  <input type="text" #item (keyup)="onChange(item.value)" />
            <button (click)="addtodo(item)">Add</button>
              <ul>
              <li *ngFor='let items of todos let i=index' >{{items}}  <button (click)="deletetodo(i)">Delete</button></li>
              </ul>{{test.value}}
  `,
 inputs: ['test'],
 outputs:['myevent']

})
export class TodosComponent {
 public test:any;
 public todos:any;
  myevent = new EventEmitter();

constructor(private todosService:TodosService){
  this.todos = todosService.gettodos();
 
}

onChange(child:string){
this.myevent.emit(child);
console.log(child);
}

 addtodo(todoitem){
   console.log(todoitem.value);
   this.todos.push(todoitem.value);
 }

deletetodo(deleteitem){
 console.log(deleteitem);
  this.todos.splice(deleteitem, 1);
}

 }
