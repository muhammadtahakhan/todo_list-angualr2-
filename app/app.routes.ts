import { provideRouter, RouterConfig }  from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import {TodosComponent} from './components/todos/todos.component';

const routes: RouterConfig = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'todolist',
    component: TodosComponent
  },
  {
    path: '',
    component: CounterComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];