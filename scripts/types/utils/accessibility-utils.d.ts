import { ReactiveController, ReactiveControllerHost } from 'lit';
import { AnyBindings } from '../components';
export interface FindAriaLiveEventArgs {
    element?: HTMLAtomicAriaLiveElement;
}
export declare class AriaLiveRegionController implements ReactiveController {
    private host;
    private regionName;
    private assertive;
    constructor(host: ReactiveControllerHost, regionName: string, assertive?: boolean);
    private getAriaLiveElement;
    private dispatchMessage;
    set message(msg: string);
    hostUpdate(): void;
}
export declare class FocusTargetController implements ReactiveController {
    private host;
    private bindings;
    private lastSearchId?;
    private element?;
    private onFocusCallback?;
    private doFocusAfterSearch;
    private doFocusOnNextTarget;
    constructor(host: ReactiveControllerHost, bindings: AnyBindings);
    setTarget(el?: HTMLElement): void;
    focus(): Promise<void>;
    focusAfterSearch(): Promise<unknown>;
    focusOnNextTarget(): Promise<unknown>;
    disableForCurrentSearch(): void;
    hostUpdated(): void;
}
export declare function getFocusableDescendants(element: Element): Generator<HTMLElement>;
export declare function getFirstFocusableDescendant(element: Element): HTMLElement | null;
