import { Component } from '@angular/core';
import {TodosService} from './../../services/todos.service';


@Component({
  selector: 'todos',
  template: `<h1>todolist</h1>
              <ul>
              <li *ngFor='#item of todos'>{{item}}</li>
              </ul>
  `,

})
export class TodosComponent {
 
 todos:any;
constructor(private todosService:TodosService){
  this.todos = todosService.gettodos();
}
 

 }
