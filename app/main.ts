import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/main/app.component';
import {provideStore } from '@ngrx/store';
import {todolistReducer} from './components/reducer/todolistreducer'

bootstrap(AppComponent, [provideStore({ todolist: todolistReducer })]);


