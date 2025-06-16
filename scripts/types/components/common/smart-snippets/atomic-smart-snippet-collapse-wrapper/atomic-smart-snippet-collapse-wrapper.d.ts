import { AnyBindings } from '../../interface/bindings';
/**
 * @internal
 */
export declare class AtomicSmartSnippetCollapseWrapper {
    bindings: AnyBindings;
    error: Error;
    host: HTMLElement;
    maximumHeight?: number;
    collapsedHeight?: number;
    isExpanded: boolean;
    showButton: boolean;
    private fullHeight?;
    private shouldRenderButton;
    private validateProps;
    initialize(): void;
    componentDidRender(): void;
    private initializeFullHeight;
    private renderButton;
    render(): any;
}
