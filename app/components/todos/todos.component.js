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
var store_1 = require('@ngrx/store');
var TodosComponent = (function () {
    function TodosComponent(store) {
        this.store = store;
        this.id = 0;
        this.todos = store.select('todolist');
        //  this.todos.subscribe(action => console.log(action));
    }
    TodosComponent.prototype.addtodo = function (todoitem) {
        this.store.dispatch({ type: 'ADD', payload: { id: ++this.id, todo: todoitem.value } });
        // this.store.dispatch({ type: ADD });
        //  this.todos.push(todoitem.value);
    };
    TodosComponent.prototype.deletetodo = function (id) {
        console.log(id);
        this.store.dispatch({ type: 'DELETE', payload: id });
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            template: "<h1>todolist</h1>\n            inter todo:  <input type=\"text\" #item/>\n            <button (click)=\"addtodo(item)\">Add</button>\n              <ul>\n              <li *ngFor=\"let item of todos | async\" >\n              {{item.todo}}\n              {{item.id}}<button (click)='deletetodo(item.id)' >Delete</button>\n              </li>\n              </ul>",
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map