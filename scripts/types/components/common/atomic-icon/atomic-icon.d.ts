import { InitializableComponent } from "../../../decorators/types";
import { LitElement } from 'lit';
import { AnyBindings } from '../interface/bindings';
declare const AtomicIcon_base: typeof LitElement;
/**
 * The `atomic-icon` component displays an SVG icon with a 1:1 aspect ratio.
 *
 * This component can display an icon from those available in the Atomic package, from a specific location, or as an inline SVG element.
 */
export declare class AtomicIcon extends AtomicIcon_base implements InitializableComponent<AnyBindings> {
    static styles: import("lit").CSSResult;
    /**
     * The SVG icon to display.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    icon: string;
    bindings: AnyBindings;
    error: Error;
    private svg;
    private fetchIcon;
    private validateSVG;
    private getIcon;
    updateIcon(): Promise<void>;
    initialize(): void;
    render(): import("lit-html").TemplateResult<2>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-icon': AtomicIcon;
    }
}
export {};
