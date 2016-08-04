import { Component, EventEmitter } from '@angular/core';
import {provideStore } from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {todolistReducer} from './../reducer/todolistreducer';
import {INCREMENT, DECREMENT, RESET} from './../reducer/counter';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import 'rxjs/add/operator/take';

interface AppState {
  counter: number;
}

@Component({
  selector: 'counter',
  template: `<button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>`,
 })
export class CounterComponent {
 counter: Observable<any>;
 public todos:any;
 
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


 }
