import { IJsonSummary, ICoverageDiffOutput, IConfigOptions } from './common';
export declare const defaultOptions: IConfigOptions;
export declare function diff(base: IJsonSummary, head: IJsonSummary, options?: IConfigOptions): ICoverageDiffOutput;
export default diff;
