import { ICoverageSummary } from './common';
export declare const mapToObject: <T extends {}>(map: Map<string, T>) => {
    [key: string]: T;
};
export declare const objectToMap: <T extends {}>(obj: {
    [key: string]: T;
}) => Map<string, T>;
export declare const getSummaryPercentages: (summary: ICoverageSummary) => {
    lines: number;
    statements: number;
    functions: number;
    branches: number;
};
