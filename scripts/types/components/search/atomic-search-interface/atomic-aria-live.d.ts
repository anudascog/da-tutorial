import { FindAriaLiveEventArgs } from '../../../utils/stencil-accessibility-utils';
/**
 * The `atomic-aria-live` component notifies screen readers of changes in the search interface.
 */
export declare class AtomicAriaLive {
    private host;
    private regions;
    private messagesQueue;
    private id;
    protected onFindAriaLive({ detail: args }: CustomEvent<FindAriaLiveEventArgs>): void;
    private get isInSearchInterface();
    connectedCallback(): void;
    /**
     * @internal
     */
    updateMessage(region: string, message: string, assertive: boolean): Promise<void>;
    /**
     * @internal
     */
    registerRegion(region: string, assertive: boolean): Promise<void>;
    disconnectedCallback(): void;
    render(): any;
}
