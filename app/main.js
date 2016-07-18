"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/main/app.component');
var store_1 = require('@ngrx/store');
var todolistreducer_1 = require('./components/reducer/todolistreducer');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [store_1.provideStore({ todolist: todolistreducer_1.todolistReducer })]);
//# sourceMappingURL=main.js.map