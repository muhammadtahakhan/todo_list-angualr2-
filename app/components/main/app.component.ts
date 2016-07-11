import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';

@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>{{childdata}}
  <input type="text" #parent (keyup)="0"/>
  <button (click)="send()">send</button>
  <todos (myevent)="childdata=$event" [test]="parent"></todos>
  
  `,
  directives: [TodosComponent],
  providers: [TodosService]
})
export class AppComponent {

 public childdata:any;

   constructor(){
     
   }
 
 }
