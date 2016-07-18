"use strict";
exports.ADD = 'ADD';
exports.UPDATE = 'UPDATE';
exports.DELETE = 'DELETE';
exports.todolistReducer = function (state, action) {
    if (state === void 0) { state = new Date(); }
    var date = new Date(state.getTime());
    switch (action.type) {
        case exports.ADD:
            date.setSeconds(date.getSeconds() + 1);
            return date;
        case exports.UPDATE:
            date.setHours(date.getHours() + 1);
            return date;
        case exports.DELETE:
            date.setHours(date.getHours() + 1);
            return date;
        default:
            return state;
    }
};
//# sourceMappingURL=todolistreducer.js.map