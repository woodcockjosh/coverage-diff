"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var markdown_table_1 = __importDefault(require("markdown-table"));
exports.resultFormatter = function (files, total) {
    var formattedFiles = formatFilesResults(files);
    var formattedTotal = formatTotal(total);
    return "" + formattedFiles + formattedTotal;
};
var formatTotal = function (total) {
    var table = [];
    var _a = total.pcts, lines = _a.lines, branches = _a.branches, functions = _a.functions, statements = _a.statements;
    var lDelta = formatDelta(total.deltas.lines);
    var bDelta = formatDelta(total.deltas.branches);
    var fDelta = formatDelta(total.deltas.functions);
    var sDelta = formatDelta(total.deltas.statements);
    table.push(['Lines', 'Branches', 'Functions', 'Statements']);
    table.push([
        lines + "%(" + lDelta + ")",
        branches + "%(" + bDelta + ")",
        functions + "%(" + fDelta + ")",
        statements + "%(" + sDelta + ")"
    ]);
    return '\n\nTotal:\n\n' + markdown_table_1.default(table);
};
var formatFilesResults = function (files) {
    var noChange = true;
    var table = [];
    var header = ['Ok', 'File', 'Lines', 'Branches', 'Functions', 'Statements'];
    table.push(header);
    Object.keys(files).forEach(function (file) {
        var _a = files[file], deltas = _a.deltas, pcts = _a.pcts, decreased = _a.decreased;
        var row = [
            decreased ? '🔴' : '✅',
            file,
            pcts.lines + "%<br>(" + formatDelta(deltas.lines) + ")",
            pcts.branches + "%<br>(" + formatDelta(deltas.branches) + ")",
            pcts.functions + "%<br>(" + formatDelta(deltas.functions) + ")",
            pcts.statements + "%<br>(" + formatDelta(deltas.statements) + ")"
        ];
        table.push(row);
        noChange = false;
    });
    return noChange ? 'Coverage values did not change👌.' : markdown_table_1.default(table);
};
var formatDelta = function (num) {
    return num >= 0 ? "+" + num + "%" : num + "%";
};
