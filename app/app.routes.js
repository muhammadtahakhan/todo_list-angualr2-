"use strict";
var router_1 = require('@angular/router');
var counter_component_1 = require('./components/counter/counter.component');
var routes = [
    {
        path: 'counter',
        component: counter_component_1.CounterComponent
    },
    {
        path: '',
        component: counter_component_1.CounterComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map