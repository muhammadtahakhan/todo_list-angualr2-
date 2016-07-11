import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';

@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>
  <input type="text" #parent (keyup)="0"/>{{parent.value}}
  <button (click)="send()">send</button>
  <todos [test]="parent"></todos>`,
  directives: [TodosComponent],
  providers: [TodosService]
})
export class AppComponent {

 
   constructor(){
     
   }
 
 }
