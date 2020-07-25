"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diffChecker_1 = require("./diffChecker");
var resultFormatter_1 = require("./resultFormatter");
exports.defaultOptions = {
    checkCriteria: ['lines', 'branches', 'functions', 'statements'],
    coverageThreshold: 100,
    coverageDecreaseThreshold: 0,
    totalsOnly: false
};
function diff(base, head, options) {
    if (options === void 0) { options = exports.defaultOptions; }
    var checkCriteria = options.checkCriteria, coverageThreshold = options.coverageThreshold, coverageDecreaseThreshold = options.coverageDecreaseThreshold, deprecatedCoverageDecreaseThreshold = options.coverageDecreaseTreshold, totalsOnly = options.totalsOnly;
    var _a = diffChecker_1.diffChecker(base, head, checkCriteria, coverageThreshold, coverageDecreaseThreshold !== undefined
        ? coverageDecreaseThreshold
        : deprecatedCoverageDecreaseThreshold, totalsOnly), regression = _a.regression, files = _a.files, totals = _a.totals, diff = _a.diff;
    var results = resultFormatter_1.resultFormatter(files, totals);
    return {
        diff: diff,
        results: results,
        regression: regression
    };
}
exports.diff = diff;
exports.default = diff;
