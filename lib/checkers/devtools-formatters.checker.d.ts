import { DevtoolsStatusChecker } from '../types/devtools-status-checker.type';
declare global {
    interface Window {
        devtoolsFormatters: unknown[] | undefined;
    }
}
export declare const devtoolsFormatterChecker: DevtoolsStatusChecker;
