import { CSSResult } from 'lit';
export declare const injectStylesForNoShadowDOM: <T extends {
    styles: CSSResult;
    new (...args: any[]): any;
}>(Base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        createRenderRoot(): any;
        connectedCallback(): void;
        injectStyles(): void;
    };
    styles: CSSResult;
} & T;
