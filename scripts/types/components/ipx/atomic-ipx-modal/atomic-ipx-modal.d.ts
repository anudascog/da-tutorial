import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { AnyBindings } from '../../common/interface/bindings';
/**
 * @internal
 */
export declare class AtomicIPXModal implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    error: Error;
    source?: HTMLElement;
    /**
     * The container to hide from the tabindex and accessibility DOM when the modal is closed.
     */
    container?: HTMLElement;
    isOpen: boolean;
    animationEnded: EventEmitter<never>;
    private hasFooterSlotElements;
    watchToggleOpen(isOpen: boolean): Promise<void>;
    private getClasses;
    onWindowTouchMove(e: Event): void;
    componentWillLoad(): void | Promise<void>;
    componentDidLoad(): void;
    private updateBreakpoints;
    render(): any;
}
