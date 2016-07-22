import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';
import {provideStore } from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {todolistReducer} from './../reducer/todolistreducer';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CounterComponent} from './../counter/counter.component';
import 'rxjs/add/operator/take';
interface AppState {
  counter: number;
}
@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>{{childdata}}
  <todos></todos>
  <counter></counter>
  
  `,
  directives: [TodosComponent, AlertComponent, CounterComponent],
  providers: [TodosService]
})
export class AppComponent {

 
 }
