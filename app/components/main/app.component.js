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
var store_1 = require('@ngrx/store');
var counter_1 = require('./../reducer/counter');
require('rxjs/add/operator/take');
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    AppComponent.prototype.increment = function () {
        this.store.dispatch({ type: counter_1.INCREMENT });
    };
    AppComponent.prototype.decrement = function () {
        this.store.dispatch({ type: counter_1.DECREMENT });
    };
    AppComponent.prototype.reset = function () {
        this.store.dispatch({ type: counter_1.RESET });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1> Todolist</h1>{{childdata}}\n  <todos></todos>\n  <button (click)=\"increment()\">Increment</button>\n        <div>Current Count: {{ counter | async }}</div>\n        <button (click)=\"decrement()\">Decrement</button>\n  ",
            directives: [todos_component_1.TodosComponent],
            providers: [todos_service_1.TodosService]
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map