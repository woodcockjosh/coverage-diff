"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
exports.coverageDiffer = function (base, head) {
    var baseMap = helpers_1.objectToMap(base);
    var headMap = helpers_1.objectToMap(head);
    var diffMap = new Map();
    headMap.forEach(function (v, k) {
        var fileSummary = baseMap.get(k);
        if (fileSummary) {
            diffMap.set(k, diffSummary(v, fileSummary));
        }
        else {
            diffMap.set(k, v);
        }
    });
    return helpers_1.mapToObject(diffMap);
};
var diffSummary = function (summaryA, summaryB) {
    return {
        lines: diffInfo(summaryA.lines, summaryB.lines),
        statements: diffInfo(summaryA.statements, summaryB.statements),
        functions: diffInfo(summaryA.functions, summaryB.functions),
        branches: diffInfo(summaryA.branches, summaryB.branches)
    };
};
var diffInfo = function (infoA, infoB) {
    return {
        total: infoA.total - infoB.total,
        covered: infoA.covered - infoB.covered,
        skipped: infoA.skipped - infoB.skipped,
        pct: Math.round((infoA.pct - infoB.pct) * 100) / 100
    };
};
