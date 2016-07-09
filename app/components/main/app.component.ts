import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service'

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 Todolist</h1><todos></todos>',
  directives: [TodosComponent],
  providers: [TodosService]
})
export class AppComponent { }
