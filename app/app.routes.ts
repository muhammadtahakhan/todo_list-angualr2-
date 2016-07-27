import { provideRouter, RouterConfig }  from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';

const routes: RouterConfig = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '',
    component: CounterComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];