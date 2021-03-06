import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/main/app.component';
import {provideStore } from '@ngrx/store';
import {todolistReducer} from './components/reducer/todolistreducer';
import {counterReducer} from './components/reducer/counter';
import { appRouterProviders } from './app.routes';


bootstrap(AppComponent, [appRouterProviders, provideStore({ todolist: todolistReducer, counter: counterReducer })]);


