"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var coverageDiffer_1 = require("./coverageDiffer");
var helpers_1 = require("./helpers");
var helpers_2 = require("./helpers");
var index_1 = require("./index");
exports.diffChecker = function (base, head, checkCriteria, coverageThreshold, coverageDecreaseThreshold, totalsOnly) {
    if (checkCriteria === void 0) { checkCriteria = index_1.defaultOptions.checkCriteria; }
    if (coverageThreshold === void 0) { coverageThreshold = index_1.defaultOptions.coverageThreshold; }
    if (coverageDecreaseThreshold === void 0) { coverageDecreaseThreshold = index_1.defaultOptions.coverageDecreaseThreshold; }
    if (totalsOnly === void 0) { totalsOnly = index_1.defaultOptions.totalsOnly; }
    var regression = false;
    var diff = coverageDiffer_1.coverageDiffer(base, head);
    var diffMap = helpers_1.objectToMap(diff);
    var percentageMap = new Map();
    var nonZeroTest = function (x) { return x !== 0; };
    var coverageDecreased = function (x) {
        return x < 0 ? Math.abs(x) >= coverageDecreaseThreshold : false;
    };
    var isBelowTreshold = function (x) { return x < coverageThreshold; };
    diffMap.forEach(function (v, k) {
        var diffPercentages = helpers_2.getSummaryPercentages(v);
        if (Object.values(diffPercentages).some(nonZeroTest)) {
            var decreased = checkCoverageForCondition(v, checkCriteria, coverageDecreased);
            var belowTreshold = checkCoverageForCondition(head[k], checkCriteria, isBelowTreshold);
            if (decreased || belowTreshold) {
                if (k === 'total' && totalsOnly) {
                    regression = true;
                }
                if (k !== 'total' && !totalsOnly) {
                    regression = true;
                }
            }
            percentageMap.set(k, {
                deltas: __assign({}, diffPercentages),
                pcts: helpers_2.getSummaryPercentages(head[k]),
                decreased: decreased
            });
        }
    });
    var totals = percentageMap.get('total');
    if (!totals) {
        totals = {
            deltas: { lines: 0, functions: 0, statements: 0, branches: 0 },
            pcts: { lines: 0, functions: 0, statements: 0, branches: 0 },
            decreased: false
        };
    }
    percentageMap.delete('total');
    return { files: helpers_1.mapToObject(percentageMap), diff: diff, totals: totals, regression: regression };
};
var checkCoverageForCondition = function (coverage, checkCriteria, condition) {
    var diffPercentages = helpers_2.getSummaryPercentages(coverage);
    var values = checkCriteria.map(function (criteria) { return diffPercentages[criteria]; });
    return values.some(condition);
};
