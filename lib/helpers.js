"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToObject = function (map) {
    var objMap = {};
    map.forEach(function (v, k) {
        objMap[k] = v;
    });
    return objMap;
};
exports.objectToMap = function (obj) { return new Map(Object.entries(obj)); };
exports.getSummaryPercentages = function (summary) { return ({
    lines: summary.lines.pct,
    statements: summary.statements.pct,
    functions: summary.functions.pct,
    branches: summary.branches.pct
}); };
