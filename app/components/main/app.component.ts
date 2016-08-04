import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';
import {provideStore } from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {todolistReducer} from './../reducer/todolistreducer';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CounterComponent} from './../counter/counter.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/add/operator/take';
interface AppState {
  counter: number;
}
@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>
   <nav>
      <a routerLink="counter" routerLinkActive="active">Crisis Center</a>
     <a routerLink="todolist" routerLinkActive="active">Todos List</a>
  </nav>
  
  <router-outlet></router-outlet>

  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [TodosService, CounterComponent],
  precompile: [CounterComponent, TodosComponent]
})
export class AppComponent {

 
 }

