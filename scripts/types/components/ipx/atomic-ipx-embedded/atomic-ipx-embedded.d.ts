import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { AnyBindings } from '../../common/interface/bindings';
/**
 * @internal
 */
export declare class AtomicIPXEmbedded implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    error: Error;
    /**
     * The container to hide from the tabindex and accessibility DOM when the modal is closed.
     */
    container?: HTMLElement;
    animationEnded: EventEmitter<never>;
    private hasFooterSlotElements;
    componentWillLoad(): void | Promise<void>;
    componentDidLoad(): void;
    private updateBreakpoints;
    render(): any;
}
