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
var todos_service_1 = require('./../../services/todos.service');
var TodosComponent = (function () {
    function TodosComponent(todosService) {
        this.todosService = todosService;
        this.todos = todosService.gettodos();
    }
    TodosComponent.prototype.addtodo = function (todoitem) {
        console.log(todoitem.value);
        this.todos.push(todoitem.value);
    };
    TodosComponent.prototype.deletetodo = function (deleteitem) {
        console.log(deleteitem);
        this.todos.splice(deleteitem, 1);
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            template: "<h1>todolist</h1>\n            inter todo:  <input type=\"text\" #item />\n            <button (click)=\"addtodo(item)\">Add</button>\n              <ul>\n              <li *ngFor='let items of todos let i=index' >{{items}}  <button (click)=\"deletetodo(i)\">Delete</button></li>\n              </ul>{{test.value}}\n  ",
            inputs: ['test']
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService])
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map