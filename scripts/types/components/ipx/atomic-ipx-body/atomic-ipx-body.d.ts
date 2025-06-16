import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { AnyBindings } from '../../common/interface/bindings';
/**
 * @internal
 */
export declare class AtomicIPXBody implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    error: Error;
    animationEnded: EventEmitter<never>;
    isOpen?: boolean;
    displayFooterSlot: boolean;
    componentDidLoad(): void;
    private updateBreakpoints;
    render(): any;
}
