export interface DebouncedQueueOptions {
    delay: number;
}
export interface DebouncedQueue {
    enqueue(execute: () => void, uniqueId?: string): void;
    clear(): void;
    cancelActionIfQueued(id: string): void;
}
export declare function buildDebouncedQueue(options: DebouncedQueueOptions): DebouncedQueue;
export declare function debounce<ExecuteParameters extends unknown[], ExecuteReturnType>(execute: (...args: ExecuteParameters) => Promise<ExecuteReturnType> | ExecuteReturnType, wait: number): (...args: ExecuteParameters) => Promise<ExecuteReturnType>;
