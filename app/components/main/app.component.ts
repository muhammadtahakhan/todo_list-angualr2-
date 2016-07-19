import { Component } from '@angular/core';
import {TodosComponent} from './../todos/todos.component';
import {TodosService} from './../../services/todos.service';
import {provideStore } from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {todolistReducer} from './../reducer/todolistreducer';
import {INCREMENT, DECREMENT, RESET} from './../reducer/counter';
import 'rxjs/add/operator/take';
interface AppState {
  counter: number;
}
@Component({
  selector: 'my-app',
  template: `<h1> Todolist</h1>{{childdata}}
  <todos></todos>
  <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
  `,
  directives: [TodosComponent],
  providers: [TodosService]
})
export class AppComponent {
counter: Observable<number>;

 public childdata:any;

   constructor(public store: Store<AppState>){
     this.counter = store.select('counter');
   }

     increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
// //  getState(store: Store<State>): State {
// //     let state: State;

// //     store.take(1).subscribe(s => state = s);

// //     return state;
// }
 
 }
