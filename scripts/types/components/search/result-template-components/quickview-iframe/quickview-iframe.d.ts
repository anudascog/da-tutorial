import { SearchEngine } from '@coveo/headless';
import { FunctionalComponent } from '../../../../stencil-public-runtime';
export declare const QuickviewIframe: FunctionalComponent<{
    content?: string;
    onSetIframeRef: (ref: HTMLIFrameElement) => void;
    uniqueIdentifier?: string;
    sandbox?: string;
    src?: string;
    logger?: SearchEngine['logger'];
}>;
