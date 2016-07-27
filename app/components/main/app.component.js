"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todos_component_1 = require('./../todos/todos.component');
var todos_service_1 = require('./../../services/todos.service');
var counter_component_1 = require('./../counter/counter.component');
var router_1 = require('@angular/router');
require('rxjs/add/operator/take');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1> Todolist</h1>\n     <nav>\n    <a routerLink=\"counter\" routerLinkActive=\"active\">Crisis Center</a>\n    \n  </nav>\n  <router-outlet></router-outlet>\n\n  <todos></todos>\n \n  \n  ",
            directives: [todos_component_1.TodosComponent, router_1.ROUTER_DIRECTIVES],
            providers: [todos_service_1.TodosService, counter_component_1.CounterComponent],
            precompile: [counter_component_1.CounterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map