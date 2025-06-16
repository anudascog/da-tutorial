import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 * The `atomic-insight-user-actions-modal` is automatically created as a child of the `atomic-insight-interface` when the `atomic-insight-user-actions-toggle` is initialized.
 *
 * When the modal is opened, the CSS class `atomic-modal-opened` is added to the interface element and the body, allowing further customization.
 */
export declare class AtomicInsightUserActionsModal implements InitializableComponent<InsightBindings> {
    host: HTMLElement;
    bindings: InsightBindings;
    error: Error;
    interfaceDimensions?: DOMRect;
    openButton?: HTMLElement;
    isOpen: boolean;
    /**
     * The ID of the user whose actions are being displayed.
     */
    userId: string;
    /**
     * The date and time when the case was created. For example "2024-01-01T00:00:00Z"
     */
    ticketCreationDateTime: string;
    /**
     * The names of custom events to exclude.
     */
    excludedCustomActions: string[];
    componentDidLoad(): void;
    watchEnabled(isOpen: boolean): void;
    private onAnimationFrame;
    private dimensionChanged;
    updateDimensions(): void;
    render(): any;
}
