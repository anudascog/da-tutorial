import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { AnyBindings } from '../interface/bindings';
/**
 * When the modal is opened, the class `atomic-modal-opened` is added to the interfaceElement and the body, allowing further customization.
 *
 * @part backdrop - The transparent backdrop hiding the content behind the modal.
 * @part container - The modal's outermost container with the outline and background.
 * @part header-wrapper - The wrapper around the header.
 * @part header - The header at the top of the modal.
 * @part header-ruler - The horizontal ruler underneath the header.
 * @part body-wrapper - The wrapper around the body.
 * @part body - The body of the modal, between the header and the footer.
 * @part footer-wrapper - The wrapper with a shadow or background color around the footer.
 * @part footer - The footer at the bottom of the modal.
 * @internal
 */
export declare class AtomicModal implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    error: Error;
    fullscreen: boolean;
    source?: HTMLElement;
    /**
     * The container to hide from the tabindex and accessibility DOM when the modal is closed.
     */
    container?: HTMLElement;
    isOpen: boolean;
    close: () => void;
    scope?: HTMLElement;
    /**
     * Whether to display the open and close animations over the entire page or the atomic-modal only.
     */
    boundary: 'page' | 'element';
    animationEnded: EventEmitter<never>;
    private wasEverOpened;
    private headerId;
    private focusTrap?;
    private animatableContainer?;
    private currentWatchToggleOpenExecution;
    watchToggleOpen(isOpen: boolean): Promise<void>;
    handleCloseOnEscape(e: KeyboardEvent): void;
    private waitForAnimationEnded;
    private getClasses;
    onWindowTouchMove(e: Event): void;
    componentDidLoad(): void;
    private updateBreakpoints;
    render(): any;
}
