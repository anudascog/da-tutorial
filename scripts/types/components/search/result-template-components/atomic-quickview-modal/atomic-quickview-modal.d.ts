import { Result } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
export interface HighlightKeywords {
    highlightNone: boolean;
    keywords: {
        [text: string]: {
            indexIdentifier: string;
            enabled: boolean;
        };
    };
}
/**
 * The modal opened when clicking on a quickview button.
 * Do not use this component directly; use `atomic-quickview` instead.
 *
 * @part quickview-modal-header-icon - The close icon of the modal.
 * @part quickview-modal-header-title - The title of the modal.
 */
export declare class AtomicQuickviewModal implements InitializableComponent {
    bindings: Bindings;
    error: Error;
    private highlightKeywords;
    watchHighlightKeywords(): void;
    nextQuickview?: EventEmitter;
    previousQuickview?: EventEmitter;
    private minimizeSidebar;
    private words;
    private iframeRef?;
    content?: string;
    result?: Result;
    current?: number;
    total?: number;
    sandbox?: string;
    modalCloseCallback?: () => void;
    private interactiveResult?;
    componentWillLoad(): void;
    reset(): Promise<void>;
    private renderHeader;
    private renderBody;
    private renderFooter;
    private onClose;
    private get isOpen();
    private get highlightScriptId();
    private get logger();
    private get quickviewSrc();
    private enableHighlights;
    private enableHighlightsSpecificKeyword;
    private disableHighlights;
    private disableHighlightsSpecificKeyword;
    private removeDisableHighlightScript;
    private createDisableHighlightScript;
    private get termsToHighlight();
    private get requestId();
    private get quickviewUniqueIdentifier();
    private handleHighlightsScripts;
    render(): any;
}
