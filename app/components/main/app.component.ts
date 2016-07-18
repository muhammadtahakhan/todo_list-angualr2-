import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';
import {provideStore } from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {todolistReducer} from './../reducer/todolistreducer';
@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>{{childdata}}
  <todos></todos>
  `,
  directives: [TodosComponent],
  providers: [TodosService]
})
export class AppComponent {

 public childdata:any;

   constructor(){
     
   }
 
 }
