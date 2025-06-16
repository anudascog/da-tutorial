import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class AtomicIPXButton implements InitializableComponent {
    bindings: Bindings;
    error: Error;
    host: HTMLElement;
    /**
     * The label that will be shown to the user.
     */
    label?: string;
    /**
     * The close icon of the button.
     */
    closeIcon: string;
    /**
     * The open icon of the button.
     */
    openIcon: string;
    /**
     * Whether the IPX modal is open.
     */
    isModalOpen: boolean;
    private recommendationsLoaded;
    private getRecommendations;
    private onClick;
    private renderIPXButton;
    render(): any;
    private get ipxModal();
    private open;
    private close;
    private getIcon;
    private cleanupSVGStyles;
    private getIconWidth;
    private getIconHeight;
}
