import { IJsonSummary, IDiffCheckResults, Criteria } from './common';
export declare const diffChecker: (base: IJsonSummary, head: IJsonSummary, checkCriteria?: Criteria[], coverageThreshold?: number, coverageDecreaseThreshold?: number, totalsOnly?: boolean) => IDiffCheckResults;
