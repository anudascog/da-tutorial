export interface AtomicEnvironment {
    version: string;
    headlessVersion: string;
}
declare global {
    interface Window {
        [anyGlobalVariable: string]: AtomicEnvironment;
    }
}
export declare function getAtomicEnvironment(): AtomicEnvironment;
export declare function setCoveoGlobal(globalVariableName: string): void;
