export interface ICoverageSummary {
    lines: ICoverageInfo;
    statements: ICoverageInfo;
    functions: ICoverageInfo;
    branches: ICoverageInfo;
}
export interface ICoverageInfo {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
}
export interface IJsonSummary {
    [key: string]: ICoverageSummary;
}
export interface ICoverageDiffOutput {
    diff: IJsonSummary;
    results: string;
    regression: boolean;
}
export declare type Criteria = 'lines' | 'branches' | 'functions' | 'statements';
export interface IConfigOptions {
    checkCriteria?: Array<Criteria>;
    coverageThreshold?: number;
    coverageDecreaseTreshold?: number;
    coverageDecreaseThreshold?: number;
    totalsOnly: boolean;
}
export interface IDiffCheckResults {
    files: IFilesResults;
    totals: IFileResultFormat;
    diff: IJsonSummary;
    regression: boolean;
}
export interface IFilesResults {
    [key: string]: IFileResultFormat;
}
export interface IFileResultFormat {
    deltas: IFileResultFields;
    pcts: IFileResultFields;
    decreased: boolean;
}
export interface IFileResultFields {
    lines: number;
    functions: number;
    statements: number;
    branches: number;
}
