import { AnyBindings } from '../components/common/interface/bindings';
import { InitializableComponent } from './initialization-utils';
/**
 * @deprecated use Lit equivalent
 */
export interface FindAriaLiveEventArgs {
    element?: HTMLAtomicAriaLiveElement;
}
/**
 * @deprecated use Lit equivalent
 */
export declare function AriaLiveRegion(regionName: string, assertive?: boolean): (component: InitializableComponent<AnyBindings>, setterName: string) => void;
/**
 * @deprecated use Lit equivalent
 */
export declare class FocusTargetController {
    private component;
    private bindings;
    private lastSearchId?;
    private element?;
    private onFocusCallback?;
    private doFocusAfterSearch;
    private doFocusOnNextTarget;
    constructor(component: InitializableComponent<AnyBindings>);
    setTarget(el: HTMLElement | undefined): void;
    focus(): Promise<void>;
    focusAfterSearch(): Promise<unknown>;
    focusOnNextTarget(): Promise<unknown>;
    disableForCurrentSearch(): void;
    private handleComponentRenderLoop;
}
/**
 * @deprecated use Lit equivalent
 */
export declare function getFocusableDescendants(element: Element): Generator<HTMLElement>;
/**
 * @deprecated use Lit equivalent
 */
export declare function getFirstFocusableDescendant(element: Element): HTMLElement | null;
