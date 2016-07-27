"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/main/app.component');
var store_1 = require('@ngrx/store');
var todolistreducer_1 = require('./components/reducer/todolistreducer');
var counter_1 = require('./components/reducer/counter');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, store_1.provideStore({ todolist: todolistreducer_1.todolistReducer, counter: counter_1.counterReducer })]);
//# sourceMappingURL=main.js.map