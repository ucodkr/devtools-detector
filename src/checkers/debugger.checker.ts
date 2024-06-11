import { now } from '../utils/time.utils';
import { DevtoolsStatusChecker } from '../types/devtools-status-checker.type';

export const debuggerChecker: DevtoolsStatusChecker = {
  name: 'debugger-checker',
  async isOpen (): Promise<boolean> {
    const startTime = now();

    // tslint:disable-next-line:no-empty only-arrow-functions
    (function () { }).constructor('debugger')();

    // 디버그가 걸리면 개발자 툴이 열린것으로 판다.
    return now() - startTime > 100;
  },
  async isEnable (): Promise<boolean> {
    return true;
  },
};
