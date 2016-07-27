"use strict";
exports.ADD = 'ADD';
exports.UPDATE = 'UPDATE';
exports.DELETE = 'DELETE';
exports.todolistReducer = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.ADD:
            return state.concat([payload]);
        case exports.UPDATE:
            return payload;
        case exports.DELETE:
            return payload;
        default:
            return state.slice();
    }
};
//# sourceMappingURL=todolistreducer.js.map