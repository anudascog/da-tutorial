import { InitializeEventHandler } from './initialization-lit-stencil-common-utils';
export type InitializeEvent = CustomEvent<InitializeEventHandler>;
declare global {
    interface Window {
        initQueueNamespace: {
            eventQueueMap: Map<Element, QueuedEvent[]>;
            parentReadyMap: Map<Element, boolean>;
        };
    }
}
type QueuedEvent = {
    event: InitializeEvent;
    element: Element;
};
export declare function markParentAsReady(parent: Element): void;
export declare function isParentReady(parent: Element): boolean;
export declare function queueEventForParent(parent: Element, event: InitializeEvent, element: Element): void;
export declare function enqueueOrDispatchInitializationEvent(parent: Element, event: InitializeEvent, element: Element): void;
export {};
