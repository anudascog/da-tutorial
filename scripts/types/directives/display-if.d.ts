import { Directive, Part } from 'lit/directive.js';
declare class DisplayIfDirective extends Directive {
    render<T>(_condition: boolean, _children: () => T): symbol;
    update<T>(part: Part, [displayCondition, children]: [boolean, () => T]): T | undefined;
}
/**
 * A directive to render children only if a condition is met.
 *
 * ### Usage:
 * ```typescript
 * class MyElement extends LitElement {
 *   render() {
 *     return displayIf(shouldDisplay, () => html`<children-element></children-element>`);
 *   }
 * }
 * ```
 *
 * In the example above, `<children-element>` is added to the host element
 * when `shouldDisplay` is true, and removed when it is false.
 *
 * ### Notes:
 * This directive also modifies the host element's class list by toggling the `atomic-hidden` CSS class based on the given condition.
 *
 * @param condition A boolean value that determines whether to display the children or not.
 * @param children Children to render if the condition is met.
 */
export declare const displayIf: (_condition: boolean, _children: () => unknown) => import("lit-html/directive.js").DirectiveResult<typeof DisplayIfDirective>;
export {};
